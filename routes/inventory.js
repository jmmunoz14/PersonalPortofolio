var express = require('express');

var router = express.Router();

let inventoryController = require('../controllers/inventory')

router.get('/', inventoryController.list);

module.exports = router;