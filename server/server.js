'use strict'
//---------------------- INIT ---------------------------------
const fetch = require('node-fetch')
//---------------------- express -------------------------
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
//-------------------- body parser -----------------------
const bodyParser = require('body-parser');

//------------------- server app -------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});
 
app.get('/', (req, res) => {

  res.send('Hello there! Use the /getWeatherData endpoint to get the weather data.');
})

function filterData(data) {
  let mins = [], maxs = [], other = [], values = [];
  
  data.list.map((item) => {
    mins.push(item.main.temp_min);
    maxs.push(item.main.temp_max);
    other.push({
      icon:item.weather[0].icon,
      date: item.dt,
      dt: new Date(item.dt)
    });
  });

  for(let i=0; i<mins.length;i+=8) {
    values.push({
      min: Math.round(Math.min(...mins.slice(i,i+8))),
      max:Math.round(Math.max(...maxs.slice(i,i+8))),
      icon: other[i].icon,
      date: other[i].date
    });
  }
  return values;
}

app.post('/getWeatherData', function(req, res, next) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${req.body.city},uk&units=metric&APPID=d4c1d69ed7ce962b094e9f8cc1d2af5f`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    if (myJson.message == 'city not found') {
      res.send();
    }
    else {
      let processedData = filterData(myJson);
      res.send(processedData);
    }
  });
});

app.get('/getAllWeatherData', function(req, res, next) {

  fetch("https://api.openweathermap.org/data/2.5/forecast?q=Stroud,uk&units=metric&APPID=d4c1d69ed7ce962b094e9f8cc1d2af5f")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    res.send(myJson);
  });
});
 
app.listen(PORT, () => {

  console.log(`app is listening on PORT: ${PORT}`)

});