var express = require('express');
var router = express.Router();

router.get('/home', function(req, res){
    res.send("Hello World!");
});
router.post('/home', function(req, res){
    res.send("You just call the post method at '/hello'!\n")
});

//export this touter to ise in exp_demo3b.js
module.exports = router;