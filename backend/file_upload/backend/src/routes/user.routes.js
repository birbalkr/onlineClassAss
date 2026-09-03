const express = require('express');
const { create } = require('../controllers/user.controller');
const upload = require('../config/multer.config');

const route = express.Router()

route.post("/create",upload.single("profileImage"),create );


module.exports = route