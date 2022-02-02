/**
 * File: contact.js
 * Student's name: Juan Manuel Muñoz
 * StudentID: 301224804
 * 2/2/2022
 */


var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();

/**
 * GET contact me page. 
 */
router.get('/', function (req, res, next) {
  res.render('contact', { title: 'Contact me' });
});


module.exports = router;
