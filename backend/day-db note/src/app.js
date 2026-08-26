const connectdb = require("./config/db");
const express = require("express");
const Noterouter = require("./routes/notes.route");
const app = express();

app.use(express.json());

connectdb();

app.get("/", (req, res) => {
  res.send("Done");
});

app.use("/notes", Noterouter);

module.exports = app;
