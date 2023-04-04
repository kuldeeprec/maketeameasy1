const Person = require('../models/Person');
const User = require('../models/User');
const express = require('express');
const router = express.Router();


router.post('/confirmfriend', async (req, res) => {
       console.log(req.body.reciever_id, "123")
       try {
              let user1 = await User.findOne({ signupEmail: req.body.sender_id });
              let sender_name = user1.name;
              let user2 = await User.findOne({ signupEmail: req.body.reciever_id });
              let reciever_name = user2.name;
              let result1 = await Person.findOne({ userId: req.body.reciever_id });
              let people1 = result1.pending_friends_reciever;
              let filteredPeople1 = people1.filter((item) => item.friend_id !== req.body.sender_id);
              result1.pending_friends_reciever = filteredPeople1;
              result1.friends.push({ friend_id: req.body.sender_id, name: sender_name });
              await result1.save();
              let result2 = await Person.findOne({ userId: req.body.sender });
              let people2 = result1.pending_friends_sender;
              let filteredPeople2 = people2.filter((item) => item.friend_id !== req.body.reciever_id);
              result2.pending_friends_sender = filteredPeople2;
              result2.friends.push({ friend_id: req.body.reciever_id, name: reciever_name });
              await result2.save();
              res.status(200).json("success");
       }
       catch (error) {
              console.error(error.message);
              res.status(500).send("internal server Error occured");
       }
})
router.post('/pendingfriend', async (req, res) => {
       try {
              let user1 = await User.findOne({ signupEmail: req.body.sender_id });
              let sender_name = user1.name;
              let user2 = await User.findOne({ signupEmail: req.body.reciever_id });
              let reciever_name = user2.name;
              let result1 = await Person.findOne({ userId: req.body.sender_id });
              result1.pending_friends_sender.push({ friend_id: req.body.reciver_id, name: reciever_name });
              await result1.save();
              let result2 = await Person.findOne({ userId: req.body.reciver_id });
              result2.pending_friends_reciever.push({ friend_id: req.body.sender_id, name: sender_name });
              await result2.save();
              res.status(200).json("success");
       }
       catch (error) {
              console.error(error.message);
              res.status(500).send("internal server Error occured");
       }
})
router.post('/fetchpendingfriend', async (req, res) => {
       try {
              let user = await Person.find({ userId: req.body.id });

              res.status(200).json(user);
       }
       catch (error) {
              console.error(error.message);
              res.status(500).send("internal server Error occured");
       }
})
router.post('/fetchconfirmfriend', async (req, res) => {
       try {
              let user = await Person.find({ userId: req.body.id });

              res.status(200).json(user);
       }
       catch (error) {
              console.error(error.message);
              res.status(500).send("internal server Error occured");
       }
})

module.exports = router