const User = require('../models/User');
const Person = require('../models/Person');
const express = require('express');
const router = express.Router();


router.post('/getplayer', async (req, res) => {
       console.log("123")
       try{
       let user = await User.find({pincode: req.body.groundpin, place: req.body.groundname});
       let people = await Person.find({userId: req.body.user_id});
       let pending_friends_send = people[0].pending_friends_sender;
       let pending_friends_reci = people[0].pending_friends_reciever;
       let confirm_friends_send = people[0].friends;

       res.status(200).json({user, pending_friends_send, pending_friends_reci, confirm_friends_send});
       }
       catch(error){
              console.error(error.message);
              res.status(500).send("internal server Error occured");
            }
})

router.post('/fetchpost', async (req, res) => {
       console.log("fetchpost")
       try{
       let people = await Person.find({userId: req.body.id});
       // console.log(people,"people");
       let all_post = people[0].post;

       console.log(typeof(all_post),"all_post");

       res.status(200).json({all_post});
       }
       catch(error){
              console.error(error.message);
              res.status(500).send("internal server Error occured");
            }
})

module.exports = router