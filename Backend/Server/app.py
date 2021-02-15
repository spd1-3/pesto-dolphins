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

@app.route('/channel/<channel_id>/message/<message_id>', methods = ['GET', 'POST'])
def message(channel_id, message_id):
    # get channel
    channel = Channel.objects(channel_id=channel_id)

    # abort if channel not found
    if(channel == None):
        abort(400, 'channel not found')

    # get messaged from channel
    channel_messages = channel.messages
    
    if request.method == "GET":
        messages_dict = [message.to_mongo().to_dict() for message in channel_messages]
        return json.dumps(messages_dict, default=str)

    if request.method == "post":
        new_message = Message(
            message_id = request.data['message_id'],
            text = request.data['text'],
            sender_id = request.data['sender_id']
        )
        channel_messages.append(new_message)
        channel.save()

# should returns all teams
@app.route('/teams')
def get_teams():
    teams = [team.to_mongo().to_dict() for team in Team.objects]
    return json.dumps(teams, default=str)

# /{user_id} returns user information
@app.route('/user/<user_id>')
def get_user(user_id=None):
    pass

if __name__ == '__main__':
    app.run()