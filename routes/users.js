var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userList', function(req, res, next) {
  const todos = [
    {
      id: 1,
      title: '吃饭'
    },
    {
      id: 2,
      title: '睡觉'
    },
    {
      id: 3,
      title: '健身'
    },
    {
      id: 4,
      title: '读书'
    },
    {
      id: 5,
      title: '学习'
    }
  ];
  // res.send('respond with a resource userList');
  res.render('home');
});

module.exports = router;
