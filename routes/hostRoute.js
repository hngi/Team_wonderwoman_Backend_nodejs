const express = require('express');
const router =  require('express-promise-router')();
const hostController = require('../controllers/hostController');

router.route('/').get(hostController.basic);
router.route('/alive').post(hostController.checkAvability);
module.exports = router;
