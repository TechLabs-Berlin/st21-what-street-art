import pandas as pd
import os
import implicit
import scipy.sparse as sparse

users = pd.read_csv('users.csv', converters={'liked': eval})

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

#To avoid multithreading:
os.environ['MKL_NUM_THREADS'] = '1'
os.environ['OPENBLAS_NUM_THREADS'] = '1'

# item_users and user_items sparse matrices:
user_items = sparse.csr_matrix((likes_dense['user_likes'].astype(float), (likes_dense['user_id'], likes_dense['artwork_id'])))
item_users = sparse.csr_matrix((likes_dense['user_likes'].astype(float), (likes_dense['artwork_id'], likes_dense['user_id'])))

# ALS model:
model = implicit.als.AlternatingLeastSquares(factors=20, regularization=0.1, iterations=20, random_state=42)
alpha_val = 15
data_conf = (item_users * alpha_val).astype('double')
model.fit(data_conf)


def get_list_of_dict(keys, list_of_tuples):
    list_of_dict = [dict(zip(keys, values)) for values in list_of_tuples]
    return list_of_dict

keys_art = ("artwork_id", 'similarity')
keys_user = ("user_id", 'confidence')

# Find similar artworks:
art_id = 25
n_similar = 6
similar = model.similar_items(art_id, n_similar)
print(get_list_of_dict(keys_art, similar))

# Recommend artworks to a user:
user_id = 14
recommended = model.recommend(user_id, user_items)
print(get_list_of_dict(keys_user,recommended))



