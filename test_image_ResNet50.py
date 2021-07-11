from PIL import Image
import pandas as pd
import numpy as np
from flask import Flask, request, jsonify, render_template, send_file
from keras.layers import (
    Flatten, Dense, InputLayer, Lambda)
from keras.preprocessing import image
from keras.layers.experimental.preprocessing import Resizing
from keras import Sequential, Model
from keras.applications.resnet50 import ResNet50
from keras.applications.vgg16 import preprocess_input

def create_model():
    resnet50 = ResNet50(include_top=False, weights='imagenet', input_shape=(224, 224, 3))

    res_model = Sequential()
    res_model.add(InputLayer((256, 256, 3)))
    res_model.add(Resizing(224, 224))
    res_model.add(Lambda(lambda image: preprocess_input(image)))
    res_model.add(resnet50)
    res_model.add(Flatten())
    res_model.add(Dense(573, activation="softmax"))

    return res_model


def preprocess_input_f(input_image):
    img = image.load_img(input_image, target_size = (256, 256))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis = 0)

    return img

def predict_image(model, img_preprocessed):
    prediction = model.predict(img_preprocessed)
    prediction = np.argmax(prediction, axis = 1)

    return prediction

def print_prediction(input_image):
    input_image_preprocessed = preprocess_input_f(input_image)
    prediction = predict_image(model, input_image_preprocessed)
    print(prediction)
    return {"result": str(prediction[0])}


def calculate_similars(model, img_preprocessed):
    prediction = model.predict(img_preprocessed)
    imgPreds = pd.DataFrame(prediction)
    imgPreds = imgPreds.sort_values(by=0, axis=1, ascending=False)
    similar_imgs = imgPreds.iloc[:,1:6]

    return similar_imgs.to_dict()

def similar_artworks(input_image):
    input_image = preprocess_input_f(input_image)

    return calculate_similars(model, input_image)



# Init app
app = Flask(__name__)


model = create_model()
model.load_weights('./ResNet50/weights.h5')



@app.route('/', methods=['GET'])
def upload_file():
   return render_template('index.html')

@app.route('/predict', methods = ['GET', 'POST'])
def save_my_image_pred():
   if request.method == 'POST':
       imgPred = Image.open(request.files['file'].stream)
       imgPred.save("this_image.jpg")
       return print_prediction("this_image.jpg")

@app.route('/similar', methods = ['GET', 'POST'])
def save_my_image_sim():
   if request.method == 'POST':
       imgSim = Image.open(request.files['file'].stream)
       imgSim.save("this_image.jpg")
       return similar_artworks("this_image.jpg")

# Run server
if __name__ == '__main__':
    app.run(debug=True)






