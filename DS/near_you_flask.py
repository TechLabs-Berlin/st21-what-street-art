from geopy.distance import geodesic
import pandas as pd
from flask import Flask, jsonify, request


app = Flask(__name__)

@app.route('/near-you', methods = ['GET'])
def near_you():
    latitude = request.args['lat']
    longitude = request.args["lng"]
    df_final = pd.read_csv('data_final.csv')
    df_final['lat_lng'] = list(zip(df_final['location_lat'], df_final['location_lng']))
    input_coord = (latitude, longitude)
    id = list(df_final['lat_lng'].index)
    distance = list(map(lambda coord: geodesic(coord, input_coord).km, df_final['lat_lng']))
    result = []
    for i, j in zip(id, distance):
        if j <= 2:
            result.append({'id': i, 'distance': j})
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)