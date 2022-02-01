var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET home page. */
router.get('/juan', function(req, res, next) {
  res.render('users', {
    title: 'Projects',
    name: 'Juan'
  });
});



module.exports = router;
