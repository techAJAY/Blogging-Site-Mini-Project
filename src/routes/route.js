const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/test', function (req, res) {
    console.log('the line is print on terminal')
    console.log('our server is:',logger.endpoint)
    console.log("complet code of our first logger")
    res.send('My first ever api on nodejs!')
    
});

router.get('/test1', function (req, res) {
    res.send('My second ever api on nodejs!')
});

module.exports = router;
// adding this comment for no reason