const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Profile = require('../models/profiles');


router.get('/', (req, res) => {
  Profile.find({}).then((profile) => {
      res.send(profile);
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
  