def make_channel(name=None, channel_id=None):
    return {
        "name": name,
        "channel_id": channel_id,
        "messages": {},
        "user_ids": [],
        "message_count": 0
    }

def make_message(message_id=None, text=None, sender_id=None):
    return {
        "message_id": message_id,
        "text": text,
        "sender_id": sender_id
    }

def make_user(name=None, user_id=None, email=None, channel_id=None):
    return {
        "name": name,
        "user_id": user_id,
        "email": email,
        "channel_id": channel_id,
        "total_messages": 0
    }