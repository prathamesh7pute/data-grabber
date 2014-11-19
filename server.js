var express = require('express');
var bodyParser = require('body-parser');
var grabber = require('./grabber');

var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile('/index.html', {root: __dirname })
});

app.post('/grab', function(req, res) {

    grabber(req.body, function(data) {
        //console.log(data);
        res.send(data);
    });

});

app.listen(process.env.PORT || 3000);
