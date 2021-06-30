from itertools import chain
import pandas as pd
import numpy as np
import implicit
import scipy.sparse as sparse


users = pd.read_csv('users.csv', converters={'liked': eval})
# print(users.info())
# print(users.liked)
# print(type(users.liked[0]))

data = [users['id'], users['liked']]
headers = ['user_id', 'artworks']
likes = pd.concat(data, axis=1, keys=headers)
# print(likes)
# print(likes.artworks[0])
# print(type(likes.artworks[0]))


X = [set(art) for art in likes.artworks]
Y = list(set(chain.from_iterable(X)))
liked_matrix = []
for id_, rec in likes.iterrows():
    row = {
        "user_id": rec.user_id,
          }
    for each_art in Y:
        if each_art in rec.artworks:
             row[f"art_{each_art}"] = 1.0
    liked_matrix.append(row)
liked_matrix = pd.DataFrame(liked_matrix)
liked_matrix = liked_matrix.set_index('user_id').fillna(0)
print(liked_matrix)
print(type(liked_matrix))
print(liked_matrix.info())

# creating a sparse matrix
liked_matrix_sparse = sparse.csr_matrix(liked_matrix.values)
print(liked_matrix_sparse)


# creating an ALS model
model = implicit.als.AlternatingLeastSquares(factors=50)
model.fit(liked_matrix_sparse)
user_items = liked_matrix_sparse.T.tocsr()
recommendations = model.recommend(4, 'art_16')
related = model.similar_items('art_16')
