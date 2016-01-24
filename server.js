var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'public/')));


app.get('/src', function(req,res,next){
    res.sendFile(path.join(__dirname,'public/src/index.html'));
});

app.get('/dist', function(req,res,next){
    res.sendFile(path.join(__dirname,'public/dist/index.html'));
});


var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('listening');
});