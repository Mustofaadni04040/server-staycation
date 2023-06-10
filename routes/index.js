var express = require("express");
var router = express.Router();

/* GET home page. pertama kali menjalan ke localhost 3000*/
router.get("/", function (req, res, next) {
  res.redirect("/admin/signin");
});

module.exports = router;
