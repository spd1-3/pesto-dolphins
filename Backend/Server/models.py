import mongoengine as db

class User(db.Document):
    name = db.StringField()
    slack_id = db.StringField()
    score = db.FloatField()
    team_name = db.StringField()

class Team(db.Document):
    name = db.StringField()