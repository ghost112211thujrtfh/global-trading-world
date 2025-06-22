const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://<your-mongodb-uri>", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  res.json({ success: !!user });
});

app.listen(4000, () => console.log("Backend running on port 4000"));
