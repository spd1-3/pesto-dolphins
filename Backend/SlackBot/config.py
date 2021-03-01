from dotenv import load_dotenv
import os
from flask_sqlalchemy import SQLAlchemy
from flask import Flask

load_dotenv()

class Config(object):
    """Set environment variables."""

    SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv('SECRET_KEY')





# class Config(object):
#     """Set environment variables."""

#     SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI')
#     SQLALCHEMY_TRACK_MODIFICATIONS = False
#     SECRET_KEY = os.getenv('SECRET_KEY')



"""notes 
only the /messagecount method is hitting the route to creat a user in the database
this means i need to for one change it so the start method hits this route
and creates the user only once 
the message count method should not be creating users


"""