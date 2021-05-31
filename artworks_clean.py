import pandas as pd

# Import CSV database in pandas (not dowloaded photos have been previously removed manually)
artworks = pd.read_csv('artworks_minus_not_downloaded.csv')

# Drop "various artists" entries
artworks.drop(artworks[artworks['artists/0/id'] == 70].index, inplace=True)
compound_murals = [21, 64, 82, 98, 174, 175, 245, 246, 320, 472]
artworks.drop(compound_murals, axis=0, inplace=True)

# Drop not needed columns
artworks.drop(['location/id', 'custom', 'external', 'rating'], inplace=True, axis=1)

# Drop all NaN columns
nan_values = artworks.isna()
nan_columns = nan_values.all()
columns_all_nan = artworks.columns[nan_columns].tolist()
artworks.drop(columns_all_nan, axis=1, inplace=True)

# New index for rows
artworks.index = range(len(artworks))

# Write to csv file
artworks.to_csv('artworks_clean.csv')

