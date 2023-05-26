// AuthRoutes.js

const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/AuthController");
const User = require("../models/user"); // Mengimpor model User

// Define your routes for register and login
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
