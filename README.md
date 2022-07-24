# Dashboardv2
![Alt text](file:///C:/Users/sethp/Desktop/Dashboard.PNG "DASHBOARD")
This is my dashboard written in html css javascript wiht a python server.
total of 4 apis and two more apps running on python server.
the apis are:

Teller : gets bank balance

openweathermap: weather

spotify: gets now playing

coingecko: gets crypto prices

(there is one more that is specific to me so there will be a blank box)-this is the dove/cat box in image

the two local 'apis' are: 

a script that gets youversions verse of the day,

a countdwon timer to your events

SETUP:
make sure you have python installed with bs4, flask, flask_cors, and requests

for teller:

DOCS: https://teller.io/docs/api/2020-10-12
find your access token put that into var token
get your .pem files and pput them in local-server directory
put app id in url of bal.py
connect your bank account to your app id

For spotify:

I followed this tutorial for the authentication of spotify:
https://www.youtube.com/watch?v=-FsFT6OwE1A&t=2389s
enetr all nessecary variables into index.js file

for openweathermap: 
https://home.openweathermap.org/
creat an account
create an app, add your location
thenput your apid and key into url in index.js

in main.py enter the ipv4 address of the computer that will be running that server

for the countdown:
make a get request to YOURIPV4:7777/give
with params 'name', 'day','moth'(as an int), 'year'
it will append it to a list and display a countdown to the next event in the list

everything except spotify updates every hour spotify updates every 10 seconds


*this is not a responsive site and is built for 1080x1920 window
run in kiosk mode
