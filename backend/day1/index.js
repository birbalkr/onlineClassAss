const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let data = [];

app.get("/", (req, res) => {
  res.send(data);
});

app.post("/profile", (req, res) => {
  console.dir(req.body);
  data.push(req.body);
  res.json(req.body);
});

app.put("/profile/:name", (req, res) => {
  const name = req.params.name;
  const updatedProfile = req.body;
  if (name === updatedProfile.name) {
    const index = data.findIndex((item) => item.name === name);
  }
});

app.delete("/profile/:name", (req, res) => {
  const name = req.params.name;
  data = data.filter((item) => item.name !== name);
  res.json({ message: `Profile with id ${name} deleted` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
