
let mongoose = require('mongoose')


let Contacts = require('../models/contacts')

exports.list = function (req, res, next) {
    Contacts.find().sort('name').exec((err, contactList) => {
        if (err) {
            return console.error(err)
        }
        else {
            console.log(contactList)
            res.render('list/contactList', {
                title: 'Contact list',
                userName: req.user ? req.user.username : '',
                ContactsList: contactList
            });
        }
    })
}



module.exports.displayAddPage = (req, res, next) => {

    let newContact = Contacts();

    res.render('list/edit', {
        title: 'Add a new contact',
        contact: newContact,
        userName: req.user ? req.user.username : ''
    })
}

module.exports.processAddPage = (req, res, next) => {

    let newItem = Contacts({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    Contacts.create(newItem, (err, item) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            console.log(item);
            res.redirect('/list');
        }
    });
}




module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contacts.findById(id, (err, itemToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('list/edit', {
                title: 'Edit Item',
                contact: itemToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contacts({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    Inventory.updateOne({ _id: id }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contacts.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/list');
        }
    });
}
