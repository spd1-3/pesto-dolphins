from SlackBot import db
#from sqlalchemy.orm import backref


class  User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80),nullable = False)
    user_id = db.Column(db.String(80),nullable = False)
    message_content = db.Column(db.String(80),nullable = True)
    message_count = db.Column(db.Integer, nullable = True)

class Team(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    team_name = db.Column(db.String(80),nullable = False)
    team_id = db.Column(db.String(80),nullable = False)
    

    