const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); 
const healthcheck = require('standard-healthcheck')

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes
app.use('/',require('./routes/hostRoute'));

 
  
var hosts = ['192.168.1.1', 'google.com', 'yahoo.com']; 




// start the server
const PORT = process.env.PORT || 3000
app.listen(PORT,console.log(`server runing on port ${PORT} ... `))