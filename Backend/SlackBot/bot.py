import slack
import os
from pathlib import Path
from dotenv import load_dotenv
from flask import Flask, request, Response
from slackeventsapi import SlackEventAdapter
import string
from datetime import datetime, timedelta
import time
import sqlite3
from flask_sqlalchemy import SQLAlchemy
from .models import User
# from config import db
# from __init__ import db,app
# from SlackBot.models import User
# from config import app,db


# db = SQLAlchemy(app)

# app.register_blueprint(User)





load_dotenv() 
SIGN_IN_SECRET = os.getenv("SIGN_IN_SECRET")
Token = os.getenv("SLACK_TOKEN")
#app = Flask(__name__)
slack_event_adapter = SlackEventAdapter(SIGN_IN_SECRET,'/slack/events',app)

env_path = Path('.')/ '.env'
load_dotenv(dotenv_path=env_path) 

client = slack.WebClient(token=os.environ["SLACK_TOKEN"])
client.chat_postMessage(channel="#general",text='hello world')

BOT_ID = client.api_call('auth.test')['user_id']


##connect to database




message_counts = {}
welcome_messages = {}

BAD_WORDS = ['peanut', 'almond', 'walnut']




class WelcomeMessage:
    START_TEXT = {
        'type': 'section',
        'text': {
            'type': 'mrkdwn',
            'text': (
                'Welcome to this awesome channel! \n\n'
                '*Get started by completing the tasks!*'
            )
        }
    }

    DIVIDER = {'type': 'divider'}

    def __init__(self, channel):
        self.channel = channel
        self.icon_emoji = ':robot_face:'
        self.timestamp = ''
        self.completed = False
        self.username = None

    def get_message(self):
        return {
            'ts': self.timestamp,
            'channel': self.channel,
            'username': 'Welcome Robot!',
            'icon_emoji': self.icon_emoji,
            'blocks': [
                self.START_TEXT,
                self.DIVIDER,
                self._get_reaction_task()
            ]
        }

    def _get_reaction_task(self):
        


        return {'type': 'section', 'text': {'type': 'mrkdwn', 'text': text}}




def send_welcome_message(channel, user):
    if channel not in welcome_messages:
        welcome_messages[channel] = {}

    if user in welcome_messages[channel]:
        return

    welcome = WelcomeMessage(channel)
    message = welcome.get_message()
    response = client.chat_postMessage(**message)
    welcome.timestamp = response['ts']

    welcome_messages[channel][user] = welcome



def check_if_bad_words(message):
    msg = message.lower()
    msg = msg.translate(str.maketrans('', '', string.punctuation))

    return any(word in msg for word in BAD_WORDS)


@ slack_event_adapter.on('message')
def message(payload):
    event = payload.get('event', {})
    channel_id = event.get('channel')
    user_id = event.get('user')
    text = event.get('text')

    if user_id != None and BOT_ID != user_id:
        if user_id in message_counts:
            message_counts[user_id] += 1
        else:
            message_counts[user_id] = 1

        if text.lower() == 'start':
            send_welcome_message(f'@{user_id}', user_id)
        elif check_if_bad_words(text):
            ts = event.get('ts')
            client.chat_postMessage(
                channel=channel_id, thread_ts=ts, text="THAT IS A BAD WORD!")
        print('-------')
        print(event)
        


@ slack_event_adapter.on('reaction_added')
def reaction(payload):
    event = payload.get('event', {})
    channel_id = event.get('item', {}).get('channel')
    user_id = event.get('user')

    if f'@{user_id}' not in welcome_messages:
        return

    welcome = welcome_messages[f'@{user_id}'][user_id]
    welcome.completed = True
    welcome.channel = channel_id
    message = welcome.get_message()
    updated_message = client.chat_update(**message)
    welcome.timestamp = updated_message['ts']


@ app.route('/message-count', methods=['POST'])
def message_count():
    data = request.form
    user_id = data.get('user_id')
    channel_id = data.get('channel_id')
    message_count = message_counts.get(user_id, 0)

    client.chat_postMessage(
        channel=channel_id, text=f"Message: {message_count}")
    print(data)
    new_user = User(1,'brent',user_id,'test',message_count)
    db.session.add(new_user)
    db.session.commit()
    
    return Response(), 200

@app.route('/start', methods = ['POST'])
def start():
    data =request.form
    user_id = request.form.get('user_id')
    user_name = request.form.get('user_name')
    print(data)
    print(user_id)
    print(user_name)

    return Response(),200


if __name__ == "__main__":
    
    
    app.run(debug=True)