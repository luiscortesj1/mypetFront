var express = require('express');
var router = express.Router();


/** Controller Index */
const controller = require('../controllers/indexController')
router.get('/',controller.home);
router.get('/login',controller.login);
router.get('/registro',controller.registro);

module.exports = router;
