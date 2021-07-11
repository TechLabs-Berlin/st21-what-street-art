import pandas as pd

# Import CSV database in pandas (not dowloaded photos have been previously removed manually)
artworks = pd.read_csv('artworks_minus_not_downloaded.csv')

# Drop "various artists" entries
artworks.drop(artworks[artworks['artists/0/id'] == 70].index, inplace=True)
compound_murals = [21, 64, 82, 98, 174, 175, 245, 246, 320, 472]
artworks.drop(compound_murals, axis=0, inplace=True)

# Drop unnecesary columns
columns_to_drop = ['id', 'cityId', 'status', 'location/id', 'slug', 'marker', 'custom', 'external', 'rating', 'locationWords', 'locationPlusCode', 'description/nl', 'images/0/id', 'images/2/id', 'images/3/id', 'images/0/attribution']
artworks.drop(columns_to_drop, inplace=True, axis=1)

# Convert unix timestamp to datetime and add column to dataframe
from datetime import datetime

list_datetime = []
for date in artworks['timestamp'] :
    datetime_date = datetime.utcfromtimestamp(date).strftime('%Y-%m-%d %H:%M:%S')
    list_datetime.append(datetime_date)

artworks.insert(11, 'date_added', list_datetime)
artworks['date_added'] = pd.to_datetime(artworks['date_added'])

# Drop all NaN columns
nan_values = artworks.isna()
nan_columns = nan_values.all()
columns_all_nan = artworks.columns[nan_columns].tolist()
artworks.drop(columns_all_nan, axis=1, inplace=True)

# New index for rows
artworks.index = range(len(artworks))

# Write to csv file
artworks.to_csv('artworks_clean.csv')



