const express = require ('express');
const app = express();
const path = require('path');

app.set('port',(process.env.PORT || 8082));

//Ejemplo delete

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

//Debe dar  error ya que el navegador ejecuta un get

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});