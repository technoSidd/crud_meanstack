const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

//retrieving contact
router.get('/contacts', (req, res, next) => {
    Contact.find((err, contacts) => {
        res.send(contacts);
    });
});

//add contact
router.post('/contacts', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    newContact.save((err, contact) => {
        if(!err){
            res.json({msg: 'Contact added success'});
        } else {
            res.json({msg: 'Contact added failure'});
        }
    });
});

//delete contact
router.delete('/contacts/:id', (req, res, next) => {
    Contact.remove({_id: req.params.id}, (err, result) => {
        if(!err) {
            res.json(result);
        } else {
            res.json(err);
        }
    });
});

//update contact
router.post('/edit', (req, res) => {
    Contact.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if(!err) {
            res.json(doc);
        } else {
            res.json(err);
        }
    });
});

module.exports = router;