let mongoose = require('mongoose');

let inventory = require('../models/inventory')

exports.list = function (req, res, next) {
    inventory.find( (err, inventoryList) => {
        if(err){
            return console.error(err)
        }
        else{
            return console.log(inventoryList)
        }
    })
}