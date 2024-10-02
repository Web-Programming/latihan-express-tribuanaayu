var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/about", function(req, res, next){
  res.render('about', {title: 'About Us'});
});

router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'Contact Us!'
  });
});

router.post('/submit-contact', (req, res, next)=> {
  const {name} = req.body;
  res.send (`
    <h1> Thank you, ${name} </h1>
    <p> Your message has been received, we will get back to you soon!</p>
    <a href="/contact"> Back to Contact </a>
    `);
});
module.exports = router;
