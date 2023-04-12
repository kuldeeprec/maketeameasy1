const express = require('express');
const Person = require('../models/Person');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body, validationResult } = require('express-validator');

var storageImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/UserImages'), function (error, success) {
      if (error) {
        console.log(error);
      }
    })
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname, function (error, success) {
      if (error) {
        console.log(error);
      }
    })
  }
})

let upload0 = multer({ storage: storageImage })
  router.post('/uploadimage', upload0.single('myimage'), async (req, res) => {
    console.log(req.body.myfile,"Upload File");
    try {
      let profile = req.file.filename;
      let { email } = req.body;
      console.log(profile, email, "req.body");
      console.log(file, "filename", req.body);
      let user1 = await Person.findOne({ userId: req.body.email });
      console.log(profile,"profile");
      if(user1.profile_img)
      {
        user1.profile_img.push({image_profile: profile});
      }
      else
      {
        user1.profile_img[0].image_profile = profile;
      }
      let p = await Person.findByIdAndUpdate(user1._id, user1);
      res.status(200).json({});
    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("internal server Error occured");
    }
  })

  var storagePost = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/UserPosts'), function (error, success) {
        if (error) {
          console.log(error);
        }
      })
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '_' + file.originalname, function (error, success) {
        if (error) {
          console.log(error);
        }
      })
    }
  })
  
  let upload1 = multer({ storage: storagePost })
  router.post('/uploadpost', upload1.single('mypost'), async (req, res) => {
    // console.log(req.body.myfile,"Upload File");
    try {
      let post = req.file.filename;
      let { email } = req.body;
      console.log(post, email, "req.body");
      // console.log(file, "filename", req.body);
      let user1 = await Person.findOne({ userId: req.body.email });
      console.log(post,"profile");
      if(user1.post)
      {
        user1.post.push({image_file: post});
      }
      else
      {
        user1.profile_img[0].image_file = post;
      }
      let p = await Person.findByIdAndUpdate(user1._id, user1);
      res.status(200).json({});
    }
    catch (error) {
      console.error(error.message);
      res.status(500).send("internal server Error occured");
    }
  })

  module.exports = router