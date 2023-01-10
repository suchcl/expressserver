var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function (req, res, next) {
  // res.send({
  //   code: 200,
  //   data: "success"
  // });
  res.render('home',{
    title: "home",
    content: 'home页面的内容'
  });
});

module.exports = router;
