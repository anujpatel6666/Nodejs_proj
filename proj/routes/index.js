var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/contact-us', function(req, res, next) {
  res.render('contact_us');
});
router.get('/chat', function(req, res, next) {
  res.render('chat');
});

module.exports = router;
