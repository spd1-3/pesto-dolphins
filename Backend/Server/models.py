def make_channel(name=None, channel_id=None, team_id=None):
    return {
        "name": name,
        "team_id": team_id,
        "channel_id": channel_id,
        "messages": {}
    }

def make_message(message_id=None, text=None, sender_id=None):
    return {
        "message_id": message_id,
        "text": text,
        "sender_id": sender_id
    }

