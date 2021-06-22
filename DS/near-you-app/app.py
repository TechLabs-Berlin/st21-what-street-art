from geopy.distance import geodesic
import pandas as pd
from flask import Flask, jsonify, request

def get_close_objects(lat, lng):
    input_coord = (lat, lng)
    df_final = pd.read_csv('../data_final.csv')
    result = []
    for index, row in df_final.iterrows():
        location_coord = (row["location_lat"], row["location_lng"])
        distance = geodesic(location_coord, input_coord).km
        if distance <= 2:
            result.append({"id": index, "distance": distance})
    return result

app = Flask(__name__)

@app.route('/near-you', methods = ['GET'])
def near_you():
    latitude = request.args['lat']
    longitude = request.args["lng"]
    result = get_close_objects(latitude, longitude)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)