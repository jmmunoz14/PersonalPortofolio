/**
 * File: index.js
 * Student's name: Juan Manuel Muñoz
 * StudentID: 301224804
 * 2/2/2022
 */

var express = require('express');

var router = express.Router();

/**
 * GET home page. 
 */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'My portfolio' });
});

/**
 * POST form input body. 
 */
router.post('/', function (req, res, next) {
  res.render('index', { title: 'My portfolio' });
  console.log(req.body.fname) // input information.
})

/**
 * GET about me page. 
 */
router.get('/aboutme', function (req, res, next) {
  res.render('aboutMe', { title: 'About Me' });
});

/**
 * GET download pdf page.
 */
router.get('/downloadcv', function (req, res, next) {
  res.download('public/downloads/CV-JuanMMuñozR.pdf');
});

/**
 * GET my projects pdf page.
 */
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'My Projects' });
});

/**
 * GET my services pdf page.
 */
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'My Services' });
});

module.exports = router;
