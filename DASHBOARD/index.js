const cryptoURL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Chelium&vs_currencies=usd';

const wheatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=APPID&appid=<YOURAPIKEY>&units=imperial';

const spotifycert = 'YOUR KEY AND SECRET BASE 64 ENCODED'
const spotifyurl = 'https://api.spotify.com/v1/me/player/currently-playing';
const spotifyrefreshurl = 'https://accounts.spotify.com/api/token';
const spotifyrefreshauth = 'YOUR SPOTIFY REFRESH KEY';
var spotifyauth = '';



const myurl = 'YOUR URL FOR PYTHON SERVER'

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Novr", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



function CLOCK(){
	let now = new Date();
	let hours = now.getHours();
	if (hours > 12){
		hours -=12;
	}
	let minutes = now.getMinutes();
	if (minutes < 10){
		minutes = ('0' + minutes);
	}

	let time = (hours + ':' + minutes)
	document.getElementById("time").innerHTML = time;
	setTimeout(CLOCK, 1000);

}

function CRYPTO(){
	$.ajax({
		type: 'GET',
		url: cryptoURL,
		success: function(data) {
			let btc = data.bitcoin.usd;
			let eth = data.ethereum.usd;
			hnt = data.helium.usd;
			document.getElementById('btc').innerHTML = ('BTC: $' + btc);
			document.getElementById('eth').innerHTML = ('ETH: $' + eth);
			document.getElementById('hnt').innerHTML = ('HNT: $' + hnt);
		

		}
	})
	setTimeout(CRYPTO, 3600000);

}
function date(){
	let today = new Date();
	let month = months[today.getMonth()];
	let weekd = days[today.getDay()];
	let numb = today.getDate();
	let year = today.getFullYear();
	document.getElementById('weekday').innerHTML = (weekd);
	document.getElementById('maindate').innerHTML = (month + ' ' + numb);
	document.getElementById('year').innerHTML = (year);
	setTimeout(date, 3600000);

}
function weather(){	
	$.ajax({
		type: 'GET',
		url: wheatherURL,
		success: function(data) {
			let sky = (data.weather[0].description);
			let temp = Math.round((data.main.temp));
			let hi = Math.round((data.main.temp_max))
			document.getElementById('temp').innerHTML = (temp + '°');
			document.getElementById('sky').innerHTML = (sky);
			document.getElementById('hilo').innerHTML = ('High: ' + hi + '°');
		}
	})
	setTimeout(weather, 3600000);

}
function spotify(){
	$.ajax({
		type: "GET",
		url: spotifyurl,
		headers: {'Authorization' : spotifyauth},
		success: function(data){
			let song = data.item.name;
			let album = data.item.album.name;
			let artist =  data.item.artists[0].name;
			let albumimg = data.item.album.images[0].url
			document.getElementById('song').innerHTML = (song);
			document.getElementById('artist').innerHTML = (artist);
			document.getElementById('album').innerHTML = (album);
			document.getElementById('coverimg').src=albumimg
		},
	})
	setTimeout(spotify, 10000);

}


function verse(){
	$.ajax({
		type: 'GET',
		url: (myurl + '/bible'),
		success: function(data){
			verse = data.Text;
			document.getElementById('verse').innerHTML = (verse);
		}
	})
	setTimeout(verse, 3600000);

}

function spotifynew(){
	$.ajax({
		type: 'POST',
		url: spotifyrefreshurl,
		data: {'grant_type': 'refresh_token', 'refresh_token': spotifyrefreshauth},
		headers: {'Authorization': "Basic " + spotifycert},
		success: function(data){
			let newtoken = (data.access_token);
			spotifyauth = 'Bearer ' + newtoken;
			console.log(spotifyauth);
			
		}
	})
	setTimeout(spotifynew, 1500000);
}



function balance(){
	$.ajax({
		type: 'GET',
		url: (myurl + '/balance'),
		success: function(data){
			console.log(data.Balance);
			let mybal = (data.Balance);
			document.getElementById('banktext').innerHTML = ('$' + mybal);
		}
	})
	setTimeout(balance, 2700000);



}

function timer(){
	document.getElementById('timertext').innerHTML = ('');
	$.ajax({
		type: 'GET',
		url: (myurl +'/receive'),
		success: function(data){
			let event = data.name;
			let days = data.timer;
			if (event != undefined){
				document.getElementById('timertext').innerHTML = (days + ' days till ' + event);
			}
		}

	})
	setTimeout(timer, 3600000);
}





$(function (){
	
	date();
	CLOCK();
	CRYPTO();
	weather();
	spotify();
	spotifynew();
	verse();
	balance();
	timer();


	
})