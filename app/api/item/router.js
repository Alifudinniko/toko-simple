
const express = require('express');
const router = express.Router();
const {auth} = require('../../middlewares/auth');
const controller = require ('./controller');


router.get('/item',auth,controller.getAll);



module.exports = router;
