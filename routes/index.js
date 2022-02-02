var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'My portfolio' });
});

router.get('/aboutme', function (req, res, next) {
  res.render('aboutMe', { title: 'About Me' });
});

router.get('/downloadcv', function (req, res, next) {
  res.download('public/downloads/CV-JuanMMuñozR.pdf');
});

router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'My Projects' });
});

router.get('/services', function (req, res, next) {
  res.render('services', { title: 'My Projects' });
});

module.exports = router;
