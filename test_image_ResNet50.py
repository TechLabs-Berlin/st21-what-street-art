from keras.layers import (
    GlobalAveragePooling2D, Multiply, Flatten,
     Dense, Dropout, Conv2D, BatchNormalization, MaxPooling2D,
    Input, Lambda)
from keras.preprocessing import image
from keras.layers.experimental.preprocessing import Resizing
from keras import Sequential, Model
from keras.applications import ResNet50
from keras.applications.vgg16 import preprocess_input
import pandas as pd

from flask import Flask, request, jsonify


def create_model:
    resnet50 = ResNet50(include_top=False, weights='imagenet', input_shape=(224, 224, 3))

    res_model = Sequential()
    res_model.add(Input((256, 256, 3)))
    res_model.add(Resizing(224, 224))
    res_model.add(Lambda(lambda image: preprocess_input(image)))
    res_model.add(resnet50)
    res_model.add(Flatten())
    res_model.add(Dense(573, activation="softmax"))

    return res_model


def preprocess_input(input_image):
    img = image.load_img(input_image, target_size = (224, 224))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis = 0)

    return img


def predict_image(model, img_preprocessed):
    prediction = model.predict(img_preprocessed)
    prediction = np.argmax(prediction, axis = 1)

    return prediction


def calculate_similars(model, img_preprocessed):
    prediction = model.predict(img_preprocessed)
    imgPreds = pd.DataFrame(prediction)
    imgPreds = imgPreds.sort_values(by=0, axis=1)
    similar_imgs = imgPreds.head(5)

    return similar_imgs


# Init app
app = Flask(__name__)

model = create_model()

model.load_weights('ResNet50/weights_160epochs.pkl')


@app.route('/AI_Models_predictions', methods=['PUT'])
def make_prediction():
    input_image = request.files('file') #TODO or however this connects exactly
    input_image = preprocess_input(input_image)
    prediction = predict_image(model, input_image)

    return jsonify(prediction)

@app.route('/AI_Models_similars', methods=['PUT'])
def similar_artworks():
    input_image = request.files('file')  # TODO or however this connects exactly
    input_image = preprocess_input(input_image)
    similar_images = calculate_similars(model, input_image)

    return jsonify(similar_images)

# Run server
if __name__ == '__main__':
    app.run(debug=True)






