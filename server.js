const express = require('express');
const app = express();
const path = require('path');

const PORT  = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

// Connecting to MongoDB
// const connectDB = require("./config/connectDB");
// connectDB();

// Default Endpoint
app.get("/api/", (req, res) => {
    res.send("QuizMasterAPI v" + require("./package.json").version);
  });

// Quiz Endpoints
app.use("/api/quiz", require("./routes/api/quiz"));

app.listen(PORT, () => console.log('Server Listening on port ' + PORT))

