
const express = require('express');
const router = express.Router();
const {auth} = require('../../middlewares/auth');
const controller = require ('./controller');


router.get('/category',auth,controller.getAll);
router.post('/category',auth,controller.create);


module.exports = router;
