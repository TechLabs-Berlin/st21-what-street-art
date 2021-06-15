import pandas as pd
import numpy as np

sac = pd.read_csv('artworks_clean.csv')
# print(sac.info())
# print(sac.describe())

un = pd.read_csv('UN_scrapping/un_complete.csv')
# print(un.info())
# print(un.describe())

sac['source'] = 'sac'
un['source'] = 'un'

df_final = pd.concat([sac,un], axis=0, ignore_index=True)
# print(df_final)
# print(df_final.info())
# print(df_final.describe())
# print(df_final.head())

df_final.columns = df_final.columns.str.replace('/' , '_')

df_final.rename(columns = {'Unnamed: 0' : 'id'}, inplace = True)
df_final.index = range(len(df_final))

df_final = df_final.drop([118, 510, 565, 566, 567, 568, 569, 570, 572, 573, 574, 575, 576, 577 ,578, 579, 581, 583, 584, 586, 591, 592, 593, 594, 595, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 609])

print(df_final.index[df_final['location_address'].isna()])
missing_address_index = df_final.index[df_final['location_address'].isna()]
df_final = df_final.drop(missing_address_index)

df_final['id'] = np.arange(len(df_final))
df_final.set_index('id')
df_final.index = range(len(df_final))
# print(df_final.index)

likes_median = df_final['likes'].median()
df_final = df_final.fillna({'likes':likes_median})

df_final['date_added'] = pd.to_datetime(df_final['date_added'])
date_added_median = df_final['date_added'].median()
df_final = df_final.fillna({'date_added': date_added_median})

timestamp_median = df_final['timestamp'].median()
df_final = df_final.fillna({'timestamp': timestamp_median})

df_final['lat_lng'] = list(zip(df_final['location_lat'], df_final['location_lng']))

df_final.to_csv('data_final.csv', index=False)