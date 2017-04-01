const express = require("express");
const routes = require("./routes/api");


const app = express();

app.use('/api', routes);

app.get('/api', function (req, res){
    console.log("GET request");
    res.send({name: "prasad"})

});

    console.log("now listening to requiets.");
    app.listen(process.env.port || 4000, function(){
});
