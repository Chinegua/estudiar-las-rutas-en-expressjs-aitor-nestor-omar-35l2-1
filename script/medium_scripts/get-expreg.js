const express = require ('express');
const app = express();
const path = require('path');

app.set('port',(process.env.PORT || 8082));

app.get('/a*a', function(req, res) {
  res.send('Cualquier cadena con a * a');
});


app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});