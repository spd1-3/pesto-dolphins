from flask import Flask, Response
from flask_cors import CORS
from flask_mongoengine import MongoEngine
from flask_pymongo import PyMongo

from models import *

import json
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

MONGO_URI = os.environ.get("MONGO_URI")

#dev
import json

app = Flask(__name__)
CORS(app)
# mongo URI for pymongo
app.config["MONGO_URI"] = MONGO_URI
mongo = PyMongo(app)
db = mongo.db.pesto
teamsdb = mongo.db.teams
usersdb = mongo.db.users
channelsdb = mongo.db.channels

# mongo URI for flask mongoengine
app.config["MONGODB_HOST"] = MONGO_URI
me_db = MongoEngine()
me_db.init_app(app)

# home route
@app.route('/')
def home():
    Team(name="pesto dolphins").save()
    return 'hello'

# should return data from a channel
@app.route('/channel/<channel_id>')
def get_channel(channel_id=None):
    pass

# should returns all teams
@app.route('/teams')
def get_teams():
    teams = [team.to_mongo().to_dict() for team in Team.objects]
    return json.dumps(teams, default=str)

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