const express = require("express");
const Question = require("../models/Question");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

router.post("/", async (req, res) => {
  try {
    const { questionText, type, options, correctAnswer } = req.body;
    const newQuestion = new Question({
      questionText,
      type,
      options,
      correctAnswer,
    });
    await newQuestion.save();
    res.json({ question: newQuestion });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;