const express = require('express');
const router = express.Router();

router.get("/ninjas", function(req, res){
    res.send("GET");
});

router.post("/ninjas", function(req, res){
    console.log(req.body);
    res.send({
        type: "POST",
        name: req.body.name,
    });
});

router.put("/ninjas/:id", function(req, res){
    res.send("PUT");
});

router.delete("/ninjas/:id", function(req, res){
    res.send("DELETE");
});

module.exports = router;
