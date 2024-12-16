const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const questionRoutes = require("./routes/questionRoutes");

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use("/base/questions", questionRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});