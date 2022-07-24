import json
from flask import jsonify
import datetime



def write(x):
	file = (open('dates.json', 'w'))
	json.dump(x, file)
	file.close()

def addEntry(entry):


	file = (open('dates.json', 'r'))
	data = json.load(file)
	data['dates'].append(entry)
	file.close()
	write(data)
	
def getEntrys():
	file = (open('dates.json', 'r'))
	data = json.load(file)
	print('HHHHHHHH  ', data['dates'])
	return data['dates']



def scan():
	now = datetime.datetime.now()
	file = (open('dates.json', 'r'))
	data = json.load(file)
	datelist = data['dates']
	for entry in datelist:
		x = datetime.datetime(int(entry['year']), int(entry['month']), int(entry['day']))
		delta  = ((x - now).days + 1)
		if delta <= 0:
			ind = (datelist.index(entry))
			del datelist[ind]
			trimmed = datelist
			final = {"dates" : trimmed}
			file.close()
			write(final)









def rfinal(dateDicts):
	dates = []
	deltas = []
	rn = datetime.datetime.now()

	for entry in dateDicts:
		x = datetime.datetime(int(entry['year']), int(entry['month']), int(entry['day']))
		dates.append(x)
	
	for date in dates:
		x = (date - rn).days
		deltas.append(x)

	timeLeft = min(deltas)
	placemnt = deltas.index(timeLeft)
	nextDate = dateDicts[placemnt]
	nextDate['timer'] = timeLeft + 1
	if timeLeft >= 0:
		return(nextDate)
	else: 
		return('')
