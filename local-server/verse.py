import requests
from bs4 import BeautifulSoup




def shrink(text):
	ps = []
	for v in text:
		ps.append(v)
	text = str(ps[0])
	text = (text.split(">", 1)[1])
	final = (text.split("<", 1)[0])
	return final


def run():
	url = 'https://www.bible.com/verse-of-the-day'


	full = requests.get(url)
	full = full.content
	soup = BeautifulSoup(full, 'html.parser')

	verse = soup.findAll('p', {'class':'yv-gray50 mt0 mb2'})
	loc = soup.findAll('p', {'class':'usfm fw7 mt0 mb0 yv-gray25 f7 ttu'})
	VERSE = (shrink(verse) + ' ' + shrink(loc))


	return VERSE
