require("dotenv").config();
//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
// const uri = 'mongodb://localhost:27017/simple-mern-passport' 

// const uri = process.env.MONGODB_URI_API

// const uri = "mongodb://Duser3:Bonus1@ds133136.mlab.com:33136/heroku_w6kv6k9d"

  mongoose.connect(
    process.env.MONGODB_URI || process.env.MONGODB_URI_API, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  }
  );

module.exports = mongoose.connection