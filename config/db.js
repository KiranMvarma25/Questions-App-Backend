const mongoose = require("mongoose");

require("dotenv").config();
let port = process.env.port

const connectDB = async () => {
  
  try{
    const conn = await mongoose.connect(port, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } 
  
  catch(error){
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

};

module.exports = connectDB;