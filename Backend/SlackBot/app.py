import slack
from flask import Flask , request , Response
import os
from pathlib import Path
from dotenv import load_dotenv
from slackeventsapi import SlackEventAdapter

SIGN_IN_SECRET='d25bb433712422f9e044eb7a36abba7d'
app = Flask(__name__)
slack_event_adapter = SlackEventAdapter(SIGN_IN_SECRET,'/slack/events',app)
Token = "xoxb-1719150547792-1738784652929-OzyHLq1PFz1UvNw4JJdl71gz"
env_path = Path('.')/ '.env'
load_dotenv(dotenv_path=env_path) 

client = slack.WebClient(token=os.environ["SLACK_TOKEN"])
client.chat_postMessage(channel="#general",text='hello world')

BOT_ID = client.api_call('auth.test')['user_id']

message_counts = {'user_id':0}

class JoinGame:
    START_TEXT = {
        'type':'section',
        'text': {
            'type': 'mrkdwn',
            'text':(
                'welcome to my test server please \n\n compleate the text to join the company game'
            )
        }
    }
    def __init__(self,channel,user):
        self.channel = channel
        self.user = user
        self.icon_emoji = ':robot_face:'
        self.timestamp = ''
        self.compleated = False
    
    def get_message(self):
        return {
            'ts': self.timestamp,
            'channel': self.channel,
            'username': 'welcome ',
            'icon_emoji': self.icon_emoji,
            'blocks':[
                self.START_TEXT,
                self.DIVIDER,
                self._get_reaction_task()
            ]
        }
    def _get_reaction_task(self):
        checkmark = ':white_check_mark:'
        if not self.compleated:
            checkmark = ':white_large_square:'
        text = f'{checkmark} react to this message'

        return [{'type': 'section','text':{'type':'mrkdwn', 'text': text}}]

@slack_event_adapter.on('message')
def message(payload):
    print(payload)
    event = payload.get('event', {})
    channel_id = event.get('channel')
    user_id = event.get('user')
    text = event.get('text')


    if user_id != None and BOT_ID != user_id:
        if user_id in message_counts:
            message_counts[user_id] += 1
        else:
            message_counts[user_id] = 1
        
        if text.lower()
        

    return event,channel_id,user_id,text

@slack_event_adapter.on('reaction_added')
def reaction(payload):
    event = payload.get('event', {})
    channel_id = event.get('item', {}).get('channel')
    user_id = event.get('user')

    # if channel_id != channels:
    #     pass
    


@app.route('/message-count', methods= ['POST'])
def message_count():
    data = request.form
    user_id = data.get('user_id')
    channel_id = data.get('channel_id')
    message_count = message_counts.get(user_id,0)
    client.chat_postMessage(channel=channel_id,text=f"Message: {message_count}")
    return Response(),200


if __name__ == "__main__": 
    app.run(debug=True)