
const express = require('express');
const router = express.Router();
const {auth} = require('../../middlewares/auth')

router.get('/category',auth, function (req, res){
    res.status(200).json({message: 'Categories route',auth:auth});

})

module.exports = router;
