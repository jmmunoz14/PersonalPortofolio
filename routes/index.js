/**
 * File: index.js. the router for the index path and manages it's REST logic and rendering.
 * Student's name: Juan Manuel Muñoz
 * StudentID: 301224804
 * 2/2/2022
 */

var express = require('express');

var router = express.Router();

let indexController = require('../controllers/index')

/**
 * GET home page. 
 */
router.get('/', indexController.home);

/**
 * POST form input body. 
 */
router.post('/', indexController.handleForm);

/**
 * GET about me page. 
 */
router.get('/aboutme', indexController.aboutme);

/**
 * GET download pdf page.
 */
router.get('/downloadcv', indexController.downloadcv);

/**
 * GET my projects page.
 */
router.get('/projects', indexController.projects);

/**
 * GET my services page.
 */
router.get('/services', indexController.services);

module.exports = router;
