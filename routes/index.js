require('dotenv').config()
const express = require("express");
const router = express.Router();

const MAGIC_PUBLISHABLE_KEY = process.env.MAGIC_PUBLISHABLE_KEY;

// GET home page
router.get("/", (req, res) => {
  res.render("index", { title: "💀 Team Deathmatch 💀", MAGIC_PUBLISHABLE_KEY });
});

module.exports = router;
