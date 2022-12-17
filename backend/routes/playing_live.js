const Playing = require('../models/Playing');
const express = require('express');
const router = express.Router();


router.post('/savemessage', async (req, res) => {
       console.log("123");
    //    await Playing.create({
    //     userId: "faizabadamit23@gmail.com",
    //   });
       try{
        let result1 = await Playing.findOne({ userId: req.body.send_id });
        result1.send_notification.push({ friend_id: req.body.reci_id, message: req.body.message, playing_date: req.body.playing_date  });
        await result1.save();
        let result2 = await Playing.findOne({ userId: req.body.reci_id });
        result2.recieve_notification.push({ friend_id: req.body.send_id, message: req.body.message, playing_date: req.body.playing_date  });
        await result2.save();

       res.status(200).json("success");
       }
       catch(error){
              console.error(error.message);
              res.status(500).send("internal server Error occured");
            }
})

router.post('/fetchsendnotification', async (req, res) => {
    try {
           let user = await Playing.find({ userId: req.body.id });
           let pending_friends_noti = user[0].recieve_notification;

           res.status(200).json(pending_friends_noti);
    }
    catch (error) {
           console.error(error.message);
           res.status(500).send("internal server Error occured");
    }
})
router.post('/acceptpendsendnotification', async (req, res) => {
       console.log(req.body.send_id, req.body.reci_id, "req.body.reci_id")
    try {
       let result1 = await Playing.findOne({ userId: req.body.reci_id });
       let people1 = result1.recieve_notification;
       let m1 = people1.message;
       let pd1 = people1.playing_date;
       let filteredPeople1 = people1.filter((item) => item.friend_id !== req.body.sender_id);
       result1.recieve_notification = filteredPeople1;
       result1.accepted_recieve_notification.push({ friend_id: req.body.send_id, message: m1, playing_date: pd1 });
       await result1.save();
       let result2 = await Person.findOne({ userId: req.body.send_id });
       let people2 = result1.send_notification;
       let filteredPeople2 = people2.filter((item) => item.friend_id !== req.body.reci_id);
       result2.pending_friends_sender = filteredPeople2;
       result2.accepted_send_notification.push({ friend_id: req.body.send_id, message: m1, playing_date: pd1 });
       await result2.save();

       res.status(200).json("success");
    }
    catch (error) {
           console.error(error.message);
           res.status(500).send("internal server Error occured");
    }
})

module.exports = router