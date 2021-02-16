import mongoengine as db

class User(db.Document):
    name = db.StringField()
    slack_id = db.StringField()
    score = db.FloatField()
    team_name = db.StringField()

class Team(db.Document):
    team_id = db.StringField()
    name = db.StringField()

class Message(db.Document):
    message_id = db.StringField()
    text = db.StringField()
    sender_id = db.StringField()

class Channel(db.Document):
    channel_id = db.StringField()
    messages = db.ListField()
    team_id = db.StringField()
