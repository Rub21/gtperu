var controllerHotel = require('./app/controllers/hotel');
var controllerRestaurant = require('./app/controllers/restaurant');
var controllerTransporte = require('./app/controllers/transporte');
var controllerRecurso = require('./app/controllers/recurso');
var controllerComplementario = require('./app/controllers/complementario');

module.exports = function(app, passport, upload) {
  //Main
  app.get('/', function(req, res) {
    res.render('pages/index.ejs');
  });
  //login
  app.get('/login', function(req, res) {
    res.render('pages/login.ejs', {
      message: req.flash('loginMessage')
    });
  });

  //singup
  app.get('/signup', function(req, res) {
    res.render('pages/signup.ejs', {
      message: req.flash('signupMessage')
    });
  });

  //profile
  app.get('/profile', isLoggedIn, function(req, res) {
    res.render('pages/profile.ejs', {
      user: req.user
    });
  });

  //logout
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/login',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/admin',
    failureRedirect: '/login',
    failureFlash: true
  }));
  //ADMIN
  app.get('/admin', isLoggedIn, function(req, res) {
    res.render('pages/admin.ejs', {
      user: req.user
    });
  });

  //HOTEL
  app.get('/hotel', isLoggedIn, function(req, res) {
    res.render('pages/hotel.ejs', {
      user: req.user
    });
  });
  app.post('/api/hoteles', isLoggedIn, function(req, res) {
    controllerHotel.save(req, res, upload, function(status) {
      if (status) {
        res.render('pages/confirm.ejs');
      }
    });
  });
  app.get('/api/hoteles', function(req, res) {
    controllerHotel.findAll(req, res);
  });
  app.delete('/api/hoteles/:id', isLoggedIn, function(req, res) {
    controllerHotel.delete(req, res);
  });

  //RESTAURANTS
  app.get('/restaurant', isLoggedIn, function(req, res) {
    res.render('pages/restaurant.ejs', {
      user: req.user
    });
  });
  app.post('/api/restaurants', isLoggedIn, function(req, res) {
    controllerRestaurant.save(req, res, upload, function(status) {
      if (status) {
        res.render('pages/confirm.ejs');
      }
    });
  });
  app.get('/api/restaurants', function(req, res) {
    controllerRestaurant.findAll(req, res);
  });
  app.delete('/api/restaurants/:id', isLoggedIn, function(req, res) {
    controllerRestaurant.delete(req, res);
  });
  //TRANSPORTE
  app.get('/transporte', isLoggedIn, function(req, res) {
    res.render('pages/transporte.ejs', {
      user: req.user
    });
  });
  app.post('/api/transportes', isLoggedIn, function(req, res) {
    controllerTransporte.save(req, res, upload, function(status) {
      if (status) {
        res.render('pages/confirm.ejs');
      }
    });
  });
  app.get('/api/transportes', function(req, res) {
    controllerTransporte.findAll(req, res);
  });
  app.delete('/api/transportes/:id', isLoggedIn, function(req, res) {
    controllerTransporte.delete(req, res);
  });

  //COMPLEMENTARIO
  app.get('/complementario', isLoggedIn, function(req, res) {
    res.render('pages/complementario.ejs', {
      user: req.user
    });
  });
  app.post('/api/complementarios', isLoggedIn, function(req, res) {
    controllerComplementario.save(req, res, upload, function(status) {
      if (status) {
        res.render('pages/confirm.ejs');
      }
    });
  });
  app.get('/api/complementarios', function(req, res) {
    controllerComplementario.findAll(req, res);
  });
  app.delete('/api/complementarios/:id', isLoggedIn, function(req, res) {
    controllerComplementario.delete(req, res);
  });
  //RECURSO
  app.get('/recurso', isLoggedIn, function(req, res) {
    res.render('pages/recurso.ejs', {
      user: req.user
    });
  });
  app.post('/api/recursos', isLoggedIn, function(req, res) {
    controllerRecurso.save(req, res, upload, function(status) {
      if (status) {
        res.render('pages/confirm.ejs');
      }
    });
  });
  app.get('/api/recursos', function(req, res) {
    controllerRecurso.findAll(req, res);
  });
  app.delete('/api/recursos/:id', isLoggedIn, function(req, res) {
    controllerRecurso.delete(req, res);
  });

  //SERVICIO
  app.get('/api/servicios', function(req, res) {
    var arr = [];
    controllerHotel.list(function(err, arr1) {
      console.log(arr1);
      arr = arr.concat(arr1);
      controllerRestaurant.list(function(err, arr2) {
        arr = arr.concat(arr2);
        controllerTransporte.list(function(err, arr3) {
          arr = arr.concat(arr3);
          controllerComplementario.list(function(err, arr4) {
            arr = arr.concat(arr4);
            res.json(arr);
          });
        });
      });
    });
  });
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}