var express = require('express');
var router = express.Router();//라우터를 사용하겠다

/* GET home page. */
router.get('/', function(req, res) {// '/' 루트경로를 들어왔을 때 rendering을 해주겠다.
    res.render('index', { title: 'Node~~~!!!'});//라우터에서  index를 띄어주겠다. title 변수를 입력해주면 된다.
});


router.get('/chat', function(req, res) {
    res.render('chat', {io_url : req.protocol+"://"+req.get('host')});//앞은 포트고, 뒤는 url
});

module.exports = router;
