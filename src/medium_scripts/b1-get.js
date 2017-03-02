const express = require ('express');
const app = express();
const path = require('path');

app.set('port',(process.env.PORT || 8082));

//Codigo de ejemplo 1 -GET-
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});