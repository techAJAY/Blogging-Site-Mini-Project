const express = require('express');
const logger = require('../logger/logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    //console.log('our server is:',logger.endpoint)
    logger.welcomemsg
    res.send('my first ever api!')
    
});

router.get('/test1', function (req, res) {
    res.send('My second ever api on nodejs!')
});

module.exports = router;
// adding this comment for no reason