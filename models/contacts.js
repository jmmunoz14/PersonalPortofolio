let mongoose = require('mongoose');

let contactModel = mongoose.Schema(
    {
        name: String,
        number: String,
        email: String,
    },
    {
        collection:"contact"
    }
)

module.exports = mongoose.model('Contacts', contactModel)