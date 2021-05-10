import requests
from bs4 import BeautifulSoup
import pandas as pd
from selenium import webdriver

def getInfo(pageCont):
    """
    Extracts the links given a class.
    :param pageCont: Estructura HTML de una web.
    :return: lista con los enlaces url mencionados
    """

    artworks = pageCont.find_all(class_ = 'tile')
    length = len(artworks)
    links = []
    titles = []
    artists = []
    images = []

    for i, piece in enumerate(artworks):
        links.append(piece.get("href"))
        titles.append(piece.get("title"))
        artists.append(piece.get("data-searchtext"))
        images.append(piece.get("style"))
        print("Artwork {i} out of {length} scrapped!".format(i+1, length))

    return links, titles, artists, images


baseWeb = "https://berlin.streetartantwerp.com/artworks"

# Initiates a connection with the browser
option = webdriver.FirefoxOptions() # Initiates the conection with the browser
option.add_argument("--headless") # Option to hide the browser
driver = webdriver.Firefox(options = option)
driver.get(baseWeb)

# Extracts the HTML structure
body = driver.execute_script("return document.body")
source = body.get_attribute("innerHTML")
webPageStructure = BeautifulSoup(source, "html.parser")

# Closes the connection with the browser
driver.close()
driver.quit()

# Extracts the information from the webpage
links, titles, artists, images = getInfo(webPageStructure)

# Turns it into a pd dataframe and exports it
dataset = pd.DataFrame({'Link': links, 'Title': titles, 'Artist': artists, 'Image link': images})

dataset.to_csv('dataset.csv', index=False, encoding="utf-8")