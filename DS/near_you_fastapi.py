from geopy.distance import geodesic
import pandas as pd
from fastapi import FastAPI
import uvicorn

app = FastAPI()
@app.get("/streetart/near-you")
def near_you(lat: float, lng: float):
    df_final = pd.read_csv('data_final.csv')
    df_final['lat_lng'] = list(zip(df_final['location_lat'], df_final['location_lng']))
    input_coord = (lat, lng)
    id = list(df_final['lat_lng'].index)
    distance = list(map(lambda coord: geodesic(coord, input_coord).km, df_final['lat_lng']))
    result = []
    for i, j in zip(id, distance):
        if j <= 2:
            result.append({'id': i, 'distance': j})
    return result

if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8000)

