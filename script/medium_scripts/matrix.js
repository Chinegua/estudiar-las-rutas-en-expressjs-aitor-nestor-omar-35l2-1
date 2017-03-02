const express = require ('express');
const app = express();
const path = require('path');

app.set('port',(process.env.PORT || 8082));

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/matrix', [cb0, cb1, cb2]);



app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});