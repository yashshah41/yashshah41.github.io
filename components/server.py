from flask import Flask, request, redirect
import requests
import os
from dotenv import load_dotenv
import base64


load_dotenv()
client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")

app = Flask(__name__)

CLIENT_ID = client_id
CLIENT_SECRET = client_secret
REDIRECT_URI = 'http://127.0.0.1:5000/callback'
AUTH_URL = 'https://accounts.spotify.com/authorize'
TOKEN_URL = 'https://accounts.spotify.com/api/token'

@app.route('/login')
def login():
    scope = 'user-top-read'
    auth_query_parameters = {
        "response_type": "code",
        "redirect_uri": REDIRECT_URI,
        "scope": scope,
        "client_id": CLIENT_ID
    }
    url_args = "&".join(["{}={}".format(key, val) for key, val in auth_query_parameters.items()])
    auth_url = "{}/?{}".format(AUTH_URL, url_args)
    return redirect(auth_url)

@app.route('/callback')
def callback():
    code = request.args.get('code')
    auth_token = get_auth_token(code)
    return "Access token: " + auth_token

def get_auth_token(code):
    authorization_header = {
        "Authorization": "Basic {}".format(base64.b64encode(f"{CLIENT_ID}:{CLIENT_SECRET}".encode()).decode())
    }
    data = {
        "grant_type": "authorization_code",
        "code": str(code),
        "redirect_uri": REDIRECT_URI
    }
    response = requests.post(TOKEN_URL, data=data, headers=authorization_header)
    if response.status_code == 200:
        return response.json()['access_token']
    else:
        return "Error: " + str(response.status_code)

if __name__ == '__main__':
    app.run(debug=True)
