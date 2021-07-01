import pandas as pd
import os
import implicit
import scipy.sparse as sparse
from sklearn.model_selection import train_test_split

users = pd.read_csv('users.csv', converters={'liked': eval})
# print(users.info())
# print(users.liked)
# print(type(users.liked[0]))

data = [users['id'], users['liked']]
headers = ['user_id', 'artworks']
likes = pd.concat(data, axis=1, keys=headers)

likes_dense = likes.artworks.apply(pd.Series) \
    .merge(likes, right_index = True, left_index = True) \
    .drop(["artworks"], axis = 1) \
    .melt(id_vars = ['user_id'], value_name = "artwork_id") \
    .drop("variable", axis=1)

likes_dense['user_likes'] = '1'

likes_dense['user_id'] = likes_dense['user_id'].astype("category").cat.codes
likes_dense['artwork_id'] = likes_dense['artwork_id'].astype("category").cat.codes

print(likes_dense)
print(likes_dense.artwork_id.dtype)

train, cros_val = train_test_split(likes_dense, test_size = 0.2, random_state = 1)
train, test = train_test_split(train, test_size = 0.25, random_state = 1)

print('Splitted dataset into train set, cross validation set and test set')
print('Train shape:', train.shape)
print('Test shape:', test.shape)
print('cros_val shape:',cros_val.shape)

user_items = sparse.csr_matrix((train['user_likes'].astype(float), (train['user_id'], train['artwork_id'])))
item_users = sparse.csr_matrix((train['user_likes'].astype(float), (train['artwork_id'], train['user_id'])))
print(item_users)
print(type(item_users))

#To avoid multithreading:
os.environ['MKL_NUM_THREADS'] = '1'
os.environ['OPENBLAS_NUM_THREADS'] = '1'

model = implicit.als.AlternatingLeastSquares(factors=20, regularization=0.1, iterations=20)
alpha = 15
train_conf = (item_users * alpha).astype('double')
model.fit(train_conf)

# Model Evaluation: Train

import csv
fields = 'user_id', 'artworks_list'
filename = 'rec_train.csv'
with open (filename, 'a', newline = '') as f:
    writer = csv.writer(f)
    writer.writerow(fields)
    user_id = train['user_id'].values.tolist()
    for user in user_id:
        scores = []
        items =[]
        results = []
        results.append(user)
        recommendations = model.recommend(user, user_items, N = 5)
        for item in recommendations:
            ids, score = item
            scores.append(score)
            items.append(ids)
        results.append(items)
        writer.writerow(results)

predicted = pd.read_csv('rec_train.csv')
predicted = predicted['artworks_list']
import ast
predicted = [ast.literal_eval(a) for a in predicted]
actual = train['artwork_id']
import numpy as np
actual = np.array(actual).reshape(12000, 1)
import ml_metrics
score = ml_metrics.mapk(actual, predicted, 5)
print('Mean avg. precision at k for train set:','{:.8f}'.format(score))

# art_id = 25
# n_similar = 5
# similar = model.similar_items(art_id, n_similar)
# print(similar)
#
# # User_items sparse matrix and recommender:
#
# user_id = 14
# recommended = model.recommend(user_id, sparse_user_item)
# print(recommended)



