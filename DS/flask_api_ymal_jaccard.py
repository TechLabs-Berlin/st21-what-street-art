import flask
from flask import request, jsonify
import json

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# Function to load list of dictionaries of artworks ranked by similarity.
def load_rankings():
    with open('liked_rankings.json') as rankings_file:
        similarity_dict = json.load(rankings_file)
        return similarity_dict

# Route homepage
@app.route('/', methods=['GET'])
def home():
    return '''<h1>A prototype API for WSA 'You Might Also Like' feature.</h1>
<p></p>'''

# Route "you may also like" function
@app.route('/api/ymal', methods=['GET'])
def api_id():
    # Check if an ID was provided as part of the URL.
    # If ID is provided, assign it to a variable.
    # If no ID is provided, display an error in the browser.
    if 'id' in request.args:
        id = request.args['id']
    else:
        return "Error: No id field provided. Please specify an id."

    # Load list of dictionaries of artworks ranked by similarity.
    rankings = load_rankings()
    # Create an empty list for results
    results = []
    # Loop through the data and match 5 closest results that fit the requested ID.
    for i in range(5):
                similar_artwork = rankings[id][i]
                results.append(similar_artwork)
    return jsonify(results)

app.run()
