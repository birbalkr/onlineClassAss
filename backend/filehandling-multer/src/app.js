const express = require('express')
const fileRoutes = require("./routes/file.routes")

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend running successfully');
})

app.use("/", fileRoutes);

module.exports = app;