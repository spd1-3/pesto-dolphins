from flask import Flask, Response
from flask_cors import CORS
from flask_pymongo import PyMongo

import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

MONGO_URI = os.environ.get("MONGO_URI")

#dev
import json

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] =  MONGO_URI
mongo = PyMongo(app)

# should returns all teams
@app.route('/teams')
def get_teams():
    pass

# /{team_id} returns stats for referenced team
@app.route('/team/<team_id>')
def get_team(team_id=None):
    pass

# /{user_id} returns user information
@app.route('/user/<user_id>')
def get_user(user_id=None):
    pass

if __name__ == '__main__':
    app.run()