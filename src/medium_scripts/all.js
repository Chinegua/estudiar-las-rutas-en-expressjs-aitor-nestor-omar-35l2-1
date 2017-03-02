const express = require ('express');
const app = express();
const path = require('path');

app.set('port',(process.env.PORT || 8082));

//Codigo de ejemplo all, en cualquier tipo de funcion que se llame(get,post,...) se ejecutará
app.all('/', function (req, res) {
  res.send('Hello World!')
})



app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});