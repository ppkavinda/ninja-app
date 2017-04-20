const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

// setup express app
const app = express();

// setup the body-parser
app.use(bodyParser.json());

// handling get mothod
app.use("/api", routes);

// listen for port 4000
app.listen(process.env.port || 4000, function(){
    console.log("You are now listening to port 4000");
});
