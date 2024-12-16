const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  
  questionText : { 
    type: String, 
    required: true 
  },

  type : { 
    type: String, 
    enum: ["multiple-choice", "fill-in-the-blank"], 
    required: true 
  },
  
  options : [String],
  
  correctAnswer : { 
    type: String, 
    required: true 
  },
  
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;