const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.json({ books: [{ title: "Intro" }] });
});

module.exports = router;
