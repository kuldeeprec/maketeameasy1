const User = require('../models/User');
const express = require('express');
const router = express.Router();


router.post('/getplayer', async (req, res) => {
       console.log(req.body.groundname, req.body.groundpin, "123")
       try{
       let user = await User.find({pincode: req.body.groundpin, place: req.body.groundname});

       res.status(200).json(user);
       }
       catch(error){
              console.error(error.message);
              res.status(500).send("internal server Error occured");
            }
})

module.exports = router