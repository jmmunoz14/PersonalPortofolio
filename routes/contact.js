/**
 * File: contact.js. the router for the contactme path and manages it's REST logic and rendering.
 * Student's name: Juan Manuel Muñoz
 * StudentID: 301224804
 * 2/2/2022
 */


var express = require('express');
var bodyParser = require('body-parser')
let contactController = require('../controllers/contact')

var router = express.Router();

/**
 * GET contact me page. 
 */
router.get('/', contactController.contact);


module.exports = router;
