const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); 

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes
app.use('/health', (req,res,next) => {
    console.log(`hi`)
    return res.json('good')
});

// start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT,console.log(`server runing on port ${PORT} ... `));