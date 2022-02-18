/**
 * File: contact.js. the router for the contactme path and manages it's REST logic and rendering.
 * Student's name: Juan Manuel Muñoz
 * StudentID: 301224804
 * 2/2/2022
 */


var express = require('express');
var bodyParser = require('body-parser')
let contactListController = require('../controllers/contactList')

var router = express.Router();


function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}



/**
 * GET contacts from db
 */
router.get('/', requireAuth , contactListController.list);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, contactListController.displayAddPage);
/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, contactListController.processAddPage);

// Routers for edit
router.get('/edit/:id', requireAuth, contactListController.displayEditPage);
router.post('/edit/:id', requireAuth, contactListController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, contactListController.performDelete);

module.exports = router;
