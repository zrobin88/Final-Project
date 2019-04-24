const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Profile = require('../models/profiles');
const queryString = require('query-string')

router.get('/:query', (req, res) => {
    // PARSE QUERY STRING HERE WITH LIBRARY
   
    const values = queryString.parse()
    
    // DETERMINE WHETHER YOU HAVE QUERIES AND IF SO USE RIGHT MONGOOSE METHOD
  Profile.find(values)
  .then((values) => {
      res.send(values);
  });
});

router.get('/:id', (req, res) => {
    Profile.findById({_id:req.params.id}).then((profile) => {
        console.log("profile is here", profile)
        res.send(profile);
    });
  });

router.post('/', (req, res) => {
    console.log('req.body', req.body);
    Profile.create(req.body).then(dbModel => {
        res.json(dbModel)
    }).catch(err => res.status(422).json(err));
});
  
module.exports = router;
  