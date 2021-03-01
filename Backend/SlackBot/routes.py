import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import Blueprint, request, render_template, redirect, url_for, flash
from datetime import date, datetime

from .bot import message_counts,app,db,User


main = Blueprint('main', __name__)





@main.route('/')
def index():
    show_all = User.query.all()
    return render_template('index.html',show_all = show_all)

@main.route('/slack/event', methods=['GET', 'POST'])
def create():
    """Create a new event."""
    if request.method == 'POST':
        data = request.form
        user_id = data.get('user_id')
        message_content = data.get('text')
        message_count = message_counts.get(user_id, 0)

        print('------------------')
        print('DATA RECIEVED')
       
        new_user= User(1,'brent',user_id,message_content,message_count)
        db.session.add(new_user)
        db.session.commit()


        flash('Event created.')
        return redirect(url_for('main.index'))
    else:
        return render_template('create.html')
