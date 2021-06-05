import pandas as pd
import numpy as np

sac = pd.read_csv('artworks_clean.csv')
print(sac.info())
print(sac.describe())

un = pd.read_csv('UN_scrapping/un_complete.csv')
print(un.info())
print(un.describe())

sac['source'] = 'sac'
un['source'] = 'un'

print(len(sac))
print(len(un))

df_final = pd.concat([sac,un], axis=0, ignore_index=True)
print(df_final)
print(df_final.info())
print(df_final.describe())
print(df_final.head())

df_final.columns = df_final.columns.str.replace('/' , '_')

for col in df_final.columns:
    print(col)

df_final.rename(columns = {'Unnamed: 0' : 'id'}, inplace = True)
df_final['id'] = np.arange(len(df_final))
df_final.set_index('id')

df_final.to_csv('data_final.csv', index=False)
