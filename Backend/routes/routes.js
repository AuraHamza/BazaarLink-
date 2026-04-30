const express = require("express");
const router = express.Router();
const { getHome, getHi, takeData, signUp, login, getProfile } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", getHome);

router.get("/hi", getHi);

router.post("/take", takeData);

router.post("/signup", signUp);

router.post("/login", login);

// Protected route - requires valid JWT token
router.get("/profile", authMiddleware, getProfile);

module.exports = router;

