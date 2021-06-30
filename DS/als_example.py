import pandas as pd
import numpy as np
import scipy.sparse as sparse
import random
import implicit

def create_data(datapath,start_date,end_date):
    df=pd.read_csv(datapath)
    df=df.assign(date=pd.Series(datetime.fromtimestamp(a/1000).date() for a in df.timestamp))
    df=df.sort_values(by='date').reset_index(drop=True) # for some reasons RetailRocket did NOT sort data by date
    df=df[(df.date>=datetime.strptime(start_date,'%Y-%m-%d').date())&(df.date<=datetime.strptime(end_date,'%Y-%m-%d').date())]
    df=df[['visitorid','itemid','event']]
    return df

datapath= './input/events.csv'
data=create_data(datapath,'2015-5-3','2015-5-18')
data['user'] = data['user'].astype("category")data['artist'] = data['artist'].astype("category")data['user_id'] = data['user'].cat.codesdata['artist_id'] = data['artist'].cat.codes