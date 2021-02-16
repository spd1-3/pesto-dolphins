from flask import Flask, Response, request
from flask_cors import CORS

from flask_pymongo import PyMongo

from models import make_channel, make_message


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

# home route
@app.route('/')
def home():
    return 'hello'

# should return data from a channel or create channel
@app.route('/channel/<channel_id>', methods=['GET', 'POST'])
def channel_route(channel_id=None):
    if request.method == 'GET':
        channel = channelsdb.find_one({"channel_id": channel_id})
        return json.dumps(channel, default=str)

    if request.method == 'POST':
        channel = make_channel(
            name = request.args.get('name'),
            channel_id = request.args.get('channel_id'),
            team_id = request.args.get('team_id')
        )
        channelsdb.insert_one(channel)
        return Response(status=200)

@app.route('/channel/<channel_id>/messages')
def messages_route(channel_id):
    channel = channelsdb.find_one({"channel_id": channel_id})
    messages = channel.get('messages', {})
    return json.dumps(messages, default=str)

@app.route('/channel/<channel_id>/message/<message_id>', methods=['GET', 'POST'])
def message_route(channel_id, message_id):
    channel = channelsdb.find_one({"channel_id": channel_id})
    messages = channel.get('messages', {})
    
    if request.method == "GET":
        message = messages.get(message_id)
        return json.dumps(message, default=str)

    if request.method == "POST":
        new_message = make_message(
            message_id = request.args['message_id'],
            text = request.args['text'],
            sender_id = request.args['sender_id']
        )
        channelsdb.update(
            {"channel_id": channel_id},
            {"$set" : {f"messages.{message_id}": new_message}}
        )
        return Response(status=200)

# /{user_id} returns user information
@app.route('/user/<user_id>')
def get_user(user_id=None):
    pass

if __name__ == '__main__':
    app.run()