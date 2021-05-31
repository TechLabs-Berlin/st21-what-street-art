import requests
from bs4 import BeautifulSoup
import pandas as pd

response = requests.get('https://urban-nation.com/art-map/')
print('Visited URL: {}'.format(response.url))
print(response.status_code)
soup = BeautifulSoup(response.text, 'html.parser')

print(type(soup))

print(soup.prettify())

map_pins = soup.find_all('input', class_='maps-pin')
print(map_pins)

art1 = map_pins[0]
print(art1)
print(type(art1))
print(art1['data-address'])

print(len(map_pins))

data_title = []
for x in range(len(map_pins) - 1):
    item = map_pins[x]['data-title']
    data_title.append(item)
print(data_title)
print(type(data_title))

strings = pd.Series(data_title)

strings[0] = 'Brave Wall by Katerina Voronina'
strings[10] = 'Untitled by Nils Westergard'
strings[11] = 'Untitled by Askew One'
strings[14] = 'ONE WALL by ELLE for URBAN NATION UNITY PROJECT'
strings[15] = 'ONE WALL by MILLO for URBAN NATION UNITY PROJECT'
strings[17] = 'Reification by Nevercrew for URBAN NATION ONE WALL PROJECT 2018'
strings[23] = 'ONE WALL by 1UP & BERLIN KIDZ & JAMES BULLOUGH & 2501'
strings[47] = 'ONE WALL by Shepard Fairey'
print(strings)

d1 = strings.str.split(pat=' by ', expand=True)
d1.rename(columns = {0 : 'title'}, inplace = True)
d1.index.name = 'id'
print(d1)

d2 = d1[1].str.split(pat=' for ', expand = True)
d2.rename(columns = {1 : 'description/en'}, inplace = True)
print(d2)

d3 = d2[0].str.split(pat=' & ', expand = True)
d3.rename(columns = {0 : 'artists/0/title', 1 : 'artists/1/title', 2 : 'artists/2/title', 3 : 'artists/3/title'}, inplace = True)
print(d3)

d12 = pd.merge(d1, d2, left_index=True, right_index=True)
d12 = d12.drop(columns=[0, 1])
print(d12.head())

data_title_df = pd.merge(d12, d3, left_index=True, right_index=True)
print(data_title_df)

data_address = []
for x in range(len(map_pins) - 1):
    item = map_pins[x]['data-address']
    data_address.append(item)
#print(data_address)

data_city = []
for x in range(len(map_pins) - 1):
    item = map_pins[x]['data-city']
    data_city.append(item)
#print(data_city)

data_icon = []
for x in range(len(map_pins) - 1):
    item = map_pins[x]['data-icon']
    data_icon.append(item)
#print(data_icon)

data_id = []
for x in range(len(map_pins) - 1):
    item = map_pins[x]['data-id']
    data_id.append(item)
#print(data_id)

data_lat = []
for x in range(len(map_pins) - 1):
    item = map_pins[x]['data-lat']
    data_lat.append(item)
#print(data_lat)

data_link = []
for x in range(len(map_pins) - 1):
    item = map_pins[x]['data-link']
    data_link.append(item)
#print(data_link)

data_lng = []
for x in range(len(map_pins) - 1):
    item = map_pins[x]['data-lng']
    data_lng.append(item)
#print(data_lng)

data_thumb = []
for x in range(len(map_pins) - 1):
    item = map_pins[x]['data-thumb']
    data_thumb.append(item)
#print(data_thumb)

data_type = []
for x in range(len(map_pins) - 1):
    item = map_pins[x]['data-type']
    data_type.append(item)
#print(data_type)

data_zip = []
for x in range(len(map_pins) - 1):
    item = map_pins[x]['data-zip']
    data_zip.append(item)
#print(data_zip)

un_incomplete = pd.DataFrame(
    {'data_address': data_address, 'data_city': data_city, 'data_icon': data_icon, 'data_id': data_id, 'data_lat': data_lat, 'data_link': data_link, 'data_lng': data_lng,'data_thumb': data_thumb, 'data_type': data_type, 'data_zip': data_zip})
un_incomplete.index.name = 'id'
print(un_incomplete)

un_complete = pd.merge(data_title_df, un_incomplete, left_index=True, right_index=True)
print(un_complete)
un_complete.to_csv('/Users/darynakubar/PycharmProjects/UN_scrapping/un_complete.csv', index=False)
