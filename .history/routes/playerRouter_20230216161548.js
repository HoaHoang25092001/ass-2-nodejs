var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('player', { title: 'Player page' });
});

module.exports = router;
