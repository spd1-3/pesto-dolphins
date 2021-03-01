from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import sys
import os
from SlackBot.config import Config

app = Flask(__name__)
app.config.from_object(Config)
app.secret_key = os.urandom(24)

db = SQLAlchemy(app)

db.create_all()

