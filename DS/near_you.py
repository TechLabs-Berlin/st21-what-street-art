from geopy.geocoders import Nominatim
from geopy.distance import geodesic
import pandas as pd
from flask import Flask

df_final = pd.read_csv('data_final.csv')
df_final['lat_lng'] = list(zip(df_final['location_lat'], df_final['location_lng']))
location = df_final['lat_lng']

geolocator = Nominatim(timeout=20, user_agent = 'what_street_art')

input_address = '31, Tasdorfer Str, Berlin, 10365, Deutschland'
input_address_to_coord = geolocator.geocode(input_address)
input_coord = (input_address_to_coord.latitude, input_address_to_coord.longitude)

def distance(value1, value2):
    new_value = geodesic(value1, value2).km
    return new_value

ids_dict = {}

for coord in location:
    dis = round(distance(input_coord, coord),2)
    if dis <= 2:
        index = location[location == coord].index[0]
        ids_dict[index] = dis
print(ids_dict)


# app = Flask(__name__)
# @app.route('/')
# def index():
#     return ids_dict
#
# if __name__ == '__main__':
#     app.run(debug=True)
