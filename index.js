var app = require('express')();
var soap = require("./tp/index.js");
var port = process.env.PORT || 7777;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.post('/', function(req, res) {
    var postId = "RK676750853TH";
    soap.get(req.query.id, function(data) {
        res.json(data.Items);
    });

});
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});