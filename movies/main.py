import io
from flask import Flask, jsonify,request
import pickle
import pandas as pd
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)


# @app.route('/get_binary_pickle_data', methods=['GET'])
# def get_binary_pickle_data():
#     # Load binary data from pickle file
#     with open('movie_list.pkl', 'rb') as f:
#         binary_data = f.read()

#     return send_file(
#         io.BytesIO(binary_data),
#         mimetype='application/octet-stream',
#         as_attachment=True,
#         download_name='movie_list.pkl'
#     )

# if __name__ == '__main__':
#     app.run(debug=True)
# movies = pickle.load(open('movie_list.pkl','rb'))
# mov_pd=pd.DataFrame(movies)
# movie_list = mov_pd['title'].values
# print(movie_list)
def fetch_poster(movie_id):
    url = "https://api.themoviedb.org/3/movie/{}?api_key=49a1706039076b3c2ce3afa164d74e4d&language=en-US".format(movie_id)
    data = requests.get(url)
    data = data.json()
    poster_path = data['poster_path']
    full_path = "https://image.tmdb.org/t/p/w500/" + poster_path
    return full_path

def recommend(movie):
    index = movies[movies['title'] == movie].index[0]
    distances = sorted(list(enumerate(similarity[index])), reverse=True, key=lambda x: x[1])
    recommended_movie_names = []
    recommended_movie_posters = []  # Define the variable here
    for i in distances[1:6]:
        # fetch the movie poster
       # movie_id = movies.iloc[i[0]].movie_id
       # recommended_movie_posters.append(fetch_poster(movie_id))
        recommended_movie_names.append(movies.iloc[i[0]].title)

    return recommended_movie_names#, recommended_movie_posters



movies = pickle.load(open('movie_list.pkl','rb'))
similarity = pickle.load(open('similarity.pkl','rb'))
movie_list = movies['title'].values

@app.route('/get_binary_pickle_data', methods=['GET'])
def get_binary_pickle_data():
    # Load binary data from pickle file
    with open('movie_list.pkl', 'rb') as f:
        data_dict = pd.read_pickle(f)

    # Extract values associated with the 'title' key
    title_values = data_dict.get('title',pd.Series())
    title_series = title_values.tolist()

    return jsonify(title_series)



@app.route('/get_recommendation', methods=['POST'])
def get_recommendation():
    # Load binary data from pickle file
    
    data = request.json
    movie_title = data.get('movie_title', '')

    return jsonify(recommend(movie_title) )


if __name__ == '__main__':
    app.run(debug=True)
