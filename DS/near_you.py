from geopy.geocoders import Nominatim
from geopy.distance import geodesic
import pandas as pd

df_final = pd.read_csv('data_final.csv')
df_final['lat_lng'] = list(zip(df_final['location_lat'], df_final['location_lng']))
location = df_final['lat_lng']

geolocator = Nominatim(timeout=20, user_agent = 'what_street_art')

input_address = '31, Tasdorfer Str, Berlin, 10365, Deutschland'
input_address_to_coord = geolocator.geocode(input_address)
input_coord = (input_address_to_coord.latitude, input_address_to_coord.longitude)
print(input_coord)

for coord in location:
    distance = geodesic(input_coord, coord).km
    if distance <= 2:
        index = location[location == coord].index[0]
        result = df_final.id[index].tolist()
        print(result)