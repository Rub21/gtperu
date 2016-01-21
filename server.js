var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Bear = require('./app/models/bear');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/geotur');
//https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
// ROUTES FOR OUR API
var router = express.Router();
router.use(function(req, res, next) {
  console.log('logging');
  next();
});

router.get('/', function(req, res) {
  res.json({
    message: 'geotur api!'
  });
});

router.route('/bears')
  .post(function(req, res) { //save bear
    var bear = new Bear();
    bear.name = req.body.name;
    bear.save(function(err) {
      if (err)
        res.send(err);
      res.json({
        message: 'Bear created!'
      });
    });
  })
  .get(function(req, res) { // get all the bears
    Bear.find(function(err, bears) {
      if (err)
        res.send(err);

      res.json(bears);
    });
  });

router.route('/bears/:bear_id')
  .get(function(req, res) { // get the bear with that id 
    Bear.findById(req.params.bear_id, function(err, bear) {
      if (err)
        res.send(err);
      res.json(bear);
    });
  })
  .put(function(req, res) { // update the bear with this id
    Bear.findById(req.params.bear_id, function(err, bear) {
      if (err)
        res.send(err);
      bear.name = req.body.name; // update the bears info
      bear.save(function(err) {
        if (err)
          res.send(err);
        res.json({
          message: 'Bear updated!'
        });
      });

    });
  })
  .delete(function(req, res) { // delete the bear with this id 
    Bear.remove({
      _id: req.params.bear_id
    }, function(err, bear) {
      if (err)
        res.send(err);
      res.json({
        message: 'Successfully deleted'
      });
    });
  });
app.use('/api', router);
app.listen(port);
console.log('Running on port ' + port);