import requests
from requests.auth import HTTPBasicAuth
import json


url = 'https://api.teller.io/accounts/YOUR APP ID/balances'
token = 'YOUR TOKEN'





def run():
	response = requests.get(url, auth=HTTPBasicAuth(token, ''), cert=('certificate.pem', 'private_key.pem'))
	text = json.loads(response.text)
	final = (text['available'])
	return(final)




