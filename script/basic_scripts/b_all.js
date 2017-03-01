const express = require ('express');
const app = express();
const path = require('path');

app.set('port',(process.env.PORT || 8082));

//Codigo de ejemplo 1 -GET-
app.get('/', function (req, res) {
  res.send('Hello World!')
})
// Ejemplo post
app.post('/', function (req, res) {
  res.send('Got a POST request')
})

//Ejemplo put


app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
//Ejemplo delete

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});



app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});