
const express = require('express');
const router = express.Router();

router.get('/categories', function (req, res){
    res.status(200).json({message: 'Categories auth'});

})

module.exports = router;
