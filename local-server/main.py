from flask import *
from flask import jsonify
from flask_cors import CORS, cross_origin
import json
import bal
import verse
import manager

app = Flask(__name__)
cors=CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



@app.route('/', methods=['GET'])
@cross_origin()
def home_page():
	data = {'endpoints': ['/balance', '/bible', '/give', '/receive']}
	json_dump = jsonify(data)
	return json_dump




@app.route('/balance', methods=['GET'])
@cross_origin()
def balance():
	data = {'Balance': bal.run()}
	json_dump = jsonify(data)
	return json_dump




@app.route('/bible', methods=['GET'])
@cross_origin()
def bible():
	data = {'Text': verse.run()}
	json_dump = jsonify(data)
	return json_dump


@app.route('/give', methods=['GET'])
@cross_origin()
def give():
	day = request.args.get('day')
	month = request.args.get('month')
	year = request.args.get('year')
	name = request.args.get('name')
	newdate = {
		'name': name,
		'day': day,
		'month': month,
		'year': year
	}
	
	manager.addEntry(newdate)
	return(newdate)
	





@app.route('/receive', methods=['GET'])
@cross_origin()
def receive():
	manager.scan()
	ents = manager.getEntrys()
	if ents == []:
		return('none')
	else:
		ent = manager.rfinal(ents)
		return(ent)
	




if __name__ == '__main__':
	app.run(host='192.168.0.104', port=7777)
