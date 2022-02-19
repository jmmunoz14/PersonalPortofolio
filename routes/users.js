var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')

/**
 * GET users listing from db
 */
router.get('/', userController.user);

/**
 * GET route for signup
 */
router.get('/signup', userController.renderSignup);

/**
 * POST route for signup
 */
router.post('/signup', userController.signup);

/**
 * GET route for signin
 */
router.get('/signin', userController.renderSignin);

/**
 * POST route for signin
 */
router.post('/signin', userController.signin);

/**
 * GET route for signout
 */
router.get('/signout', userController.signout);

module.exports = router;
