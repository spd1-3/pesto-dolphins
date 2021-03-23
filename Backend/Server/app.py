from flask import Flask, Response, request
from flask_cors import CORS
from urllib.parse import parse_qs, parse_qsl
from flask_pymongo import PyMongo
#from slackeventsapi import SlackEventAdapter

from models import make_channel, make_message, make_user

import requests 
import json
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

MONGO_URI = os.environ.get("MONGO_URI")
CLIENT_ID = os.environ.get('CLIENT_ID')
CLIENT_SECRET = os.environ.get('CLIENT_SECRET')


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

# return all channel ids
@app.route('/channels')
def find_all_channels():
    channel_ids = []
    channels = channelsdb.find()
    for channel in channels:
        channel_ids.append(channel['channel_id'])
    return json.dumps(channel_ids, default=str)

# should return data from a channel or create channel
@app.route('/channel/<channel_id>', methods=['GET', 'POST'])
def channel_route(channel_id=None):
    if request.method == 'GET':
        channel = channelsdb.find_one({"channel_id": channel_id})
        channel['users'] = list(usersdb.find({"channel_id": channel_id}))

        return json.dumps(channel, default=str)

    if request.method == 'POST':
        channel = make_channel(
            name = request.args.get('name'),
            channel_id = request.args.get('channel_id'),
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
    sender_id = request.args['sender_id']
    
    if request.method == "GET":
        message = messages.get(message_id)
        return json.dumps(message, default=str)

    if request.method == "POST":
        new_message = make_message(
            text = request.args['text'],
            sender_id = sender_id
        )
        channel_message_count = channel.get('message_count')
        channelsdb.update_one(
            {"channel_id": channel_id},
            {"$set": {f"messages.{message_id}": new_message}}
        )
        channelsdb.update_one(
            {"channel_id": channel_id},
            {"$set": {"message_count": channel_message_count + 1}}
        )
        sender = usersdb.find_one({"user_id": sender_id})
        if sender is not None:
            sender_total_messages = sender.get('total_messages', 0)
            usersdb.update_one(
                {"user_id": sender_id},
                {"$set": {"total_messages": sender_total_messages + 1}}
            )
        return Response(status=200)

# return all users within channel
@app.route('/channel/<channel_id>/users')
def channel_users(channel_id):
    channel = channelsdb.find_one({"channel_id": channel_id})
    user_ids = channel.get('user_ids', [])
    users = list(usersdb.find({"channel_id": channel_id}))

    return json.dumps(users, default=str)

# returns user information
@app.route('/user/<user_id>',  methods=['GET', 'POST'])
def get_user(user_id=None):
    if request.method == "GET":
        user = usersdb.find_one({"user_id": user_id})
        return json.dumps(user, default=str)
        
    if request.method == "POST":
        if usersdb.find_one({"user_id": user_id}) is None:
            new_user = make_user(
                name = request.args['name'],
                user_id = request.args['user_id'],
                email =  request.args['email'],
                channel_id = request.args['channel_id']
            )
            usersdb.insert_one(new_user)
            channelsdb.update_one(
                {"channel_id":  request.args['channel_id']},
                {"$push": {"user_ids": request.args['user_id']}}
            )
        return Response(status=200)

@app.route('/set-message-count', methods=['POST'])
def update_message_count():
    if request.method == "POST":
        user_id = request.args['user_id']
        new_count = request.args['count']
        usersdb.update_one(
            {"user_id":  user_id},
            {"$set": {"total_messages": new_count}}
        )
        return Response(status=200)
#change route to slack oauth si
#

@app.route('/testing',methods=['POST','GET'])
def return_login_info():
    code = request.args['code']

    data = {
        "code" : code,
        "client_id": CLIENT_ID,
        "client_secret":CLIENT_SECRET

    }
    
    url = 'https://slack.com/api/oauth.v2.access'
    headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    response = requests.post(url,{'code':code,
    'client_id':CLIENT_ID,
    'client_secret':CLIENT_SECRET
    },{},headers=headers)
    # data = response.content
    # data = data.decode('utf-8')
    # #data =json.load(data)
    # raw = json.dumps(data,default=tuple)
    # team_id = raw
    # print(raw)
    # #data = parse_qsl(data)
    data = response.json()
    #print(data)
    print('-----')
    print(data['authed_user']['access_token'])
    print(data['team']['id'])
    print('----')
    access_token = data['authed_user']['access_token']
    team_id = data['team']['id']
    
    #new_data = response.content.decode("utf-8")
    
    
    
    
    return Response(data)
    


# @app.route('/test')
# def make_user_test():
#     data = {
#         "name": "test David",
#         "user_id": "127",
#         "email": "testdavid@123.com",
#         "channel_id": "125"
#     }
#     headers = {'Content-Type': 'application/json'}
#     # url = f'https://pesto-dolphin.herokuapp.com/user/{data["user_id"]}?name={data["name"]}&user_id={data["user_id"]}&email={data["email"]}&channel_id={data["channel_id"]}'
#     # url = f'https://pesto-dolphin.herokuapp.com/user/{user_id}?name={user_name}&user_id={user_id}&email=example@email.com&channel_id={channel_id}'

#     url = "https://pesto-dolphin.herokuapp.com" + f'/channel/100?name=Orange&channel_id=100'
#     response = requests.post(url, headers=headers)

#     return Response(status=200)

if __name__ == '__main__':
    app.run()