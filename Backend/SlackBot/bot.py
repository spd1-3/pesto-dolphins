import slack
import os
import sys 
from pathlib import Path
from dotenv import load_dotenv
from flask import Flask, request, Response
from slackeventsapi import SlackEventAdapter
import json
import requests
# sys.path.append(os.path.abspath(os.path.join('..','..','Server')))
sys.path.append('/Users/brent/Desktop/Development/makeschool/term3/spd1.3/pesto-dolphins/Backend/Server/models.py')


#from Server.models import *
# from Server.app import usersdb
# from Server.

#from Server.models import make_user

#/Users/brent/Desktop/Development/makeschool/term3/spd1.3/pesto-dolphins/Backend/Server/models.py



load_dotenv()
POST_URL = os.getenv('POST_URL') 
SIGN_IN_SECRET = os.getenv("SIGN_IN_SECRET")
Token = os.getenv("SLACK_TOKEN")
app = Flask(__name__)
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



# def check_if_bad_words(message):
#     string = ''
#     msg = message.lower()
#     msg = msg.translate(str.maketrans('', '', string.punctuation))

#     return any(word in msg for word in BAD_WORDS)


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
        # elif check_if_bad_words(text):
        #     ts = event.get('ts')
        #     client.chat_postMessage(
        #         channel=channel_id, thread_ts=ts, text="THAT IS A BAD WORD!")
        # print('-------')
        # print(event)
        


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
    headers = {'Content-Type': 'application/json'}
    url = POST_URL + f"/set-message-count?user_id={user_id}&count={message_count}"
    
    response = requests.post(url, data=json.dumps(data), headers=headers)
   # new_user = make_user(1,'brent',user_id,'test',message_count)
    
    
    return Response(), 200

@app.route('/start', methods = ['POST'])
def start():
    data =request.form
    user_id = request.form.get('user_id')
    user_name = request.form.get('user_name')
    channel_id = request.form.get('team_id')
    headers = {'Content-Type': 'application/json'}
    url = POST_URL + f'/user/{user_id}?name={user_name}&user_id={user_id}&email=example@email.com&channel_id={channel_id}'
    response = requests.post(url, data=json.dumps(data), headers=headers)
    
    # new_user = make_user(user_name,user_id,'email@email.com',channel_id,)
    # usersdb.insert_one(new_user)
    
    print(data)
    print(user_id)
    print(user_name)

@ app.route('/start-server', methods = ['POST'])
def start_server():
    data =request.form
    team_id = request.form.get('team_id')
    team_domain = request.form.get('team_domain')
    channel_id = request.form.get('channel_id')
    headers = {'Content-Type': 'application/json'}
    url = POST_URL + f'/channel/{team_id}?name={team_domain}&channel_id={channel_id}'
    response = requests.post(url, data=json.dumps(data), headers=headers)
    
    # new_user = make_user(user_name,user_id,'email@email.com',channel_id,)
    # usersdb.insert_one(new_user)
    
   

    return Response(),200


if __name__ == "__main__":
    
    
    app.run(debug=True)