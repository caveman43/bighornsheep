var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* GET Hello world page. */

router.get('/greet', function(req,res) {
	var str = req.query.name;
	var msg = 'Hello '+str;
	res.send(200, {title : msg });
});
