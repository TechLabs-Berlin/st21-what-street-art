import pandas as pd
import numpy as np
import matplotlib
import matplotlib.pyplot as plt

# Import CSV database in pandas
artworks = pd.read_csv('artworks.csv')

# Dates of creation in database
from datetime import datetime

list_datetime = []

for date in artworks['timestamp'] :
    datetime_date = datetime.utcfromtimestamp(date).strftime('%Y-%m-%d %H:%M:%S')
    list_datetime.append(datetime_date)


# Delete not downloaded images from database
