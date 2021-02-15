from flask import Flask, Response, request
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

def me_queryset_to_dict(me_queryset):
    return [query.to_mongo().to_dict() for query in me_queryset]

# home route
@app.route('/')
def home():
    return 'hello'

# should return data from a channel
@app.route('/channel/<channel_id>', methods=['GET', 'POST'])
def channel_route(channel_id=None):
    if request.method == 'GET':
        try:
            channel = Channel.objects.get(channel_id=channel_id)
        except Channel.DoesNotExist:
            return Response("Channel not found", status=400)
        else:
            return json.dumps(channel.to_mongo().to_dict(), default=str)

    if request.method == 'POST':
        channel = Channel(
            channel_id = request.args['channel_id'],
            team_id = request.args['team_id']
        )
        channel.save()
        return Response(status=200)

@app.route('/channel/<channel_id>/messages')
def messages_route(channel_id):
    try:
        channel = Channel.objects.get(channel_id=channel_id)
        messages = channel.messages
        return json.dumps(me_queryset_to_dict(messages), default=str)

    except Channel.DoesNotExist:
        return Response("Channel not found", status=400)

@app.route('/channel/<channel_id>/message/<message_id>', methods=['GET', 'POST'])
def message_route(channel_id, message_id):
    try:
        # get channel
        channel = Channel.objects.get(channel_id=channel_id)
    except Channel.DoesNotExist:
        # return error if channel does not exist
        return Response("Channel not found", status=400)
    else:
        # get messaged from channel
        channel_messages = channel.messages
    
        if request.method == "GET":
            #TODO: find and return specific message
            return json.dumps(channel_messages, default=str)

        if request.method == "POST":
            # new_message = Message(
            #     message_id = request.args['message_id'],
            #     text = request.args['text'],
            #     sender_id = request.args['sender_id']
            # )
            channel_messages.append({
                "message_id": request.args['message_id'],
                "text": request.args['text'],
                "sender_id": request.args['sender_id']
            })
            channel.save()
            return Response(status=200)

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