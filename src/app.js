const express = require("express");
const cors = require("cors");

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json("TCIT Post API 1.0");
});

app.use("/api/posts", require("./routes/post.routes"));

module.exports = app;
