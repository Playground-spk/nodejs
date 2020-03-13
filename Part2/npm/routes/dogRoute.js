const express = require('express');
const router = express.Router();

router.post('/walk', function(req, res){
    res.send('dog walk')
});

router.post('/sleep', function(req, res){
    res.send('dog sleep')
});

module.exports = router;