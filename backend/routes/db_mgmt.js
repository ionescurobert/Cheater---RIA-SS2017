var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var Long = require('mongodb').Long;
var Decimal = require('mongodb').Decimal128;

/* GET users listing. */
router.get('/', function(req, res, next) {

/*    res.json([{
        id: 1,
        username: "Test user 3"
    }, {
        id: 2,
        username: "Test user 4"
    }]);*/
});

// Connection URL
var url = 'mongodb://localhost:27017/cheater_db';

// Connect method to connect to server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    var longValue = Long(1787);
    var decimalValue = Decimal.fromString("28.8892836");

    // Insert multiple documents
    db.collection('Testuser').insertMany([ { a : longValue }, { b : decimalValue } ], function(err, r) {
        assert.equal(null, err);
        assert.equal(2, r.insertedCount);
        db.close();
    });
});

module.exports = router;

