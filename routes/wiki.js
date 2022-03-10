const express = require("express");
const router = express.Router();

// router.use(function (req, res, next) {
//   // .. some logic here .. like any other middleware
//   console.log("whats up");
//   next();
// });
router.get("/", function (req, res, next) {
  // ..
  res.send("hell yeah");
});

router.post("/", function (req, res, next) {
  // ..
  res.send("oh yeah");
});

router.get("/add", function (req, res, next) {
  // ..
  res.send("damn right");
});

module.exports = router;
