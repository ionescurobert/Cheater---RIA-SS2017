var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    res.json([{
        id: 1,
        username: "Test user 1"
    }, {
        id: 2,
        username: "Test user 2"
    }]);
});

module.exports = router;

