const express = require("express");
const router = express.Router();

// router.use(function (req, res, next) {
//   // .. some logic here .. like any other middleware
//   console.log("whats up");
//   next();
// });
router.get("/", function (req, res, next) {
  // ..
  res.send("am i working");
});

module.exports = router;
