const express = require ('express');
const app = express();
const path = require('path');

app.set('port',(process.env.PORT || 8082));

app.get('/nombre', function (req, res, next) {
  console.log('Mi nombre lo veras en el navegador');
  next();
}, function (req, res) {
  res.send('Me llamo Cristobal Soria');
});



app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});