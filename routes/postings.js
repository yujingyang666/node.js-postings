var express = require('express');
var router = express.Router();
var Note = require('../model/note').Note

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('postings');
});


router.get('/notes',function(req,res,next){
    Note.findAll({raw:true}).then(function(notes) {
    res.send(notes);
})
//res.send('qqq')
})

router.post('/add',function(req,res,next){
    Note.create({
     text: req.body.text,
     name: req.body.name,
     time: req.body.time
  });
  Note.findAll({raw:true}).then(function(notes) {
    res.send(notes);
})
})

module.exports = router;
