import pandas as pd
import numpy as np
import datetime as dt

sac = pd.read_csv('artworks_clean.csv')
#print(sac.info())
#print(sac.describe())

un = pd.read_csv('UN_scrapping/un_complete.csv')
#print(un.info())
#print(un.describe())

sac['source'] = 'sac'
un['source'] = 'un'

df_final = pd.concat([sac,un], axis=0, ignore_index=True)
#print(df_final)
#print(df_final.info())
#print(df_final.describe())
#print(df_final.head())

df_final.columns = df_final.columns.str.replace('/' , '_')

df_final.rename(columns = {'Unnamed: 0' : 'id'}, inplace = True)
df_final.index = range(len(df_final))

df_final = df_final.drop([118, 510, 565, 566, 567, 568, 569, 570, 572, 573, 574, 575, 576, 577 ,578, 579, 581, 583, 584, 586, 591, 592, 593, 594, 595, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 609])
df_final['id'] = np.arange(len(df_final))
df_final.set_index('id')
df_final.index = range(len(df_final))
#print(df_final.index)

likes_median = df_final['likes'].median()
df_final = df_final.fillna({'likes':likes_median})

#df_final.to_csv('data_final.csv', index=False)

def random_dates(start, end, n=11):

    start_u = start.value//10**9
    end_u = end.value//10**9

    return pd.to_datetime(np.random.randint(start_u, end_u, n), unit='s')

df_final['date_added'] = pd.to_datetime(df_final['date_added'])
start_datetime = df_final['date_added'].min()
end_datetime = df_final['date_added'].max()

random_date_added = random_dates(start_datetime, end_datetime)

#random_date_added = random_date_added.dt.strftime('%Y-%m-%d %H:%M:%S')
#print(random_date_added)
#print(df_final['date_added'].isna().sum())
#df_final = df_final.fillna({'date_added': random_date_added})

