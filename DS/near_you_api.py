from geopy.geocoders import Nominatim
from geopy.distance import geodesic
import pandas as pd
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/near-you')
def near_you():
    df_final = pd.read_csv('data_final.csv')
    df_final['lat_lng'] = list(zip(df_final['location_lat'], df_final['location_lng']))
    geolocator = Nominatim(timeout=20, user_agent = 'what_street_art')
    input_address = '31, Tasdorfer Str, Berlin, 10365, Deutschland'
    input_address_to_coord = geolocator.geocode(input_address)
    input_coord = (input_address_to_coord.latitude, input_address_to_coord.longitude)
    id = list(df_final['lat_lng'].index)
    distance = list(map(lambda coord: geodesic(coord, input_coord).km, df_final['lat_lng']))
    art_near_you = []
    for i, j in zip(id, distance):
        if j <= 2:
            art_near_you.append({'id': i, 'distance': j})
    return jsonify(art_near_you)

if __name__ == '__main__':
    app.run(debug=True)