var express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    AWS = require('aws-sdk');
bodyParser = require('body-parser');

var proxy = require('express-http-proxy');

var ekStepCP = 'https://s3.ap-south-1.amazonaws.com/ekstep-public-dev';
var app = express();
app.set('port', 3010);
app.use(express.static(path.join(__dirname, '.')));
var server = http.createServer(app).listen(app.get('port'));
console.log('server is running');


//app.use(bodyParser.urlencoded({ extended: false }))