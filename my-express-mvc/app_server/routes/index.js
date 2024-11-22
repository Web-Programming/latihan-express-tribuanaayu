var express = require('express');
var router = express.Router();

//Memanggil Controller Main
var mainController = require("../controllers/main");

//Update router
router.get('/', mainController.index); //memanggil Main Controller : index
router.get('/contact', mainController.contact); //memanggil Main Controller : contact
router.get('/profile', mainController.profile); //memanggil Main Controller : profile

module.exports = router;
