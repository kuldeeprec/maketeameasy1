const mongoose = require("mongoose");

// const mongoURI = "mongodb://localhost:27017/chat?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const mongoURI =
  "mongodb+srv://kuldeep:12345@cluster0.g3fzb.mongodb.net/maketeameasychat?retryWrites=true&w=majority";
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
