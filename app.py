from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

API_KEY = "ead3379a"  # Replace with your API key
BASE_URL = "https://www.omdbapi.com"

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/get_movie', methods=['POST'])
def get_movie():
    movie = request.json.get("movie")
    if not movie:
        return jsonify({"error": "Movie name is required"}), 400
    complete_url = f"{BASE_URL}?t={movie}&apikey={API_KEY}"
    print(complete_url)
    response = requests.get(complete_url)
    data = response.json()
    
    if response.status_code != 200:
        return jsonify ({"error": data.get("message", "Failed to fetch weather data")})
    
    print(data)
    Info={
        "Title":data["Title"]

    }
    print(Info)
    return jsonify(Info)

@app.route('/get_movie_details', methods=['POST'])
def get_movie_details():
    movie = request.json.get("movie")
    if not movie:
        return jsonify({"error": "Movie name is required"}), 400
    complete_url = f"{BASE_URL}?t={movie}&apikey={API_KEY}"
    print(complete_url)
    response = requests.get(complete_url)
    data = response.json()
    
    if response.status_code != 200:
        return jsonify ({"error": data.get("message", "Failed to fetch weather data")})
    
    Info={
        "MovieName":data["Title"],
        "Released":data["Released"],
        "Language":data["Language"]

    }
    print(Info)
    return jsonify(Info)

@app.route('/get_movie_cast', methods=['POST'])
def get_movie_cast():
    movie = request.json.get("movie")
    if not movie:
        return jsonify({"error": "Movie name is required"}), 400
    complete_url = f"{BASE_URL}?t={movie}&apikey={API_KEY}"
    print(complete_url)
    response = requests.get(complete_url)
    data = response.json()
    
    if response.status_code != 200:
        return jsonify ({"error": data.get("message", "Failed to fetch weather data")})
    
    Info={
        "Director":data["Director"],
        "Writer":data["Writer"],
        "Actor":data["Actors"]

    }
    print(Info)
    return jsonify(Info)

@app.route('/get_movie_cast_only', methods=['POST'])
def get_movie_cast_only():
    movie = request.json.get("movie")
    if not movie:
        return jsonify({"error": "Movie name is required"}), 400
    complete_url = f"{BASE_URL}?t={movie}&apikey={API_KEY}"
    print(complete_url)
    response = requests.get(complete_url)
    data = response.json()
    
    if response.status_code != 200:
        return jsonify ({"error": data.get("message", "Failed to fetch weather data")})
    
    Info={
        "Actors":data["Actors"],
        "Plot":data["Plot"]

    }
    print(Info)
    return jsonify(Info)

if __name__ == "__main__":
    app.run(port=8000,debug=True)