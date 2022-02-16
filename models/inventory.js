let mongoose = require('mongoose');

let inventoryModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        tags: [],
        size: {
            h: Number,
            w: Number,
            uom: String
        }
    },
    {
        collection:"inventory"
    }
)

module.exports = mongoose.model('Inventory', inventoryModel)