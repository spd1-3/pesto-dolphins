from flask import Flask, Response
from flask_cors import CORS
from flask_pymongo import PyMongo


#dev
import json

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret!'
# mongoURI = "mongodb://localhost:27017/redditTickers"
mongoURI = "mongodb+srv://pestodolphins:makeschool@cluster0.pce5s.mongodb.net/pestodolphins?retryWrites=true&w=majority"
app.config["MONGO_URI"] =  mongoURI
mongo = PyMongo(app)

@app.route('/')
def home():
    return 'home :)'

if __name__ == '__main__':
    app.run()