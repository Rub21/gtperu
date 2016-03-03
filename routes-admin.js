var controllerHotel = require('./app/controllers/cHotel');
var controllerRestaurant = require('./app/controllers/cRestaurant');
var controllerTransporte = require('./app/controllers/cTransporte');
var controllerRecurso = require('./app/controllers/cRecurso');
var controllerComplementario = require('./app/controllers/cComplementario');

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
  app.post('/hoteles', isLoggedIn, function(req, res) {
    controllerHotel.save(req, res, upload, function(status) {
      if (status) {
        res.render('pages/confirm.ejs');
      }
    });
  });
  app.get('/hoteles', isLoggedIn, function(req, res) {
    controllerHotel.findAll(req, res);
  });
  app.delete('/hoteles/:id', isLoggedIn, function(req, res) {
    controllerHotel.delete(req, res);
  });

  //RESTAURANTS
  app.get('/restaurant', isLoggedIn, function(req, res) {
    res.render('pages/restaurant.ejs', {
      user: req.user
    });
  });
  app.post('/restaurants', isLoggedIn, function(req, res) {
    controllerRestaurant.save(req, res, upload, function(status) {
      if (status) {
        res.render('pages/confirm.ejs');
      }
    });
  });
  app.get('/restaurants', isLoggedIn, function(req, res) {
    controllerRestaurant.findAll(req, res);
  });
  app.delete('/restaurants/:id', isLoggedIn, function(req, res) {
    controllerRestaurant.delete(req, res);
  });
  //TRANSPORTE
  app.get('/transporte', isLoggedIn, function(req, res) {
    res.render('pages/transporte.ejs', {
      user: req.user
    });
  });
  app.post('/transportes', isLoggedIn, function(req, res) {
    controllerTransporte.save(req, res, upload, function(status) {
      if (status) {
        res.render('pages/confirm.ejs');
      }
    });
  });
  app.get('/transportes', isLoggedIn, function(req, res) {
    controllerTransporte.findAll(req, res);
  });
  app.delete('/transportes/:id', isLoggedIn, function(req, res) {
    controllerTransporte.delete(req, res);
  });

  //COMPLEMENTARIO
  app.get('/complementario', isLoggedIn, function(req, res) {
    res.render('pages/complementario.ejs', {
      user: req.user
    });
  });
  app.post('/complementarios', isLoggedIn, function(req, res) {
    controllerComplementario.save(req, res, upload, function(status) {
      if (status) {
        res.render('pages/confirm.ejs');
      }
    });
  });
  app.get('/complementarios', isLoggedIn, function(req, res) {
    controllerComplementario.findAll(req, res);
  });
  app.delete('/complementarios/:id', isLoggedIn, function(req, res) {
    controllerComplementario.delete(req, res);
  });
  //RECURSO
  app.get('/recurso', isLoggedIn, function(req, res) {
    res.render('pages/recurso.ejs', {
      user: req.user
    });
  });
  app.post('/recursos', isLoggedIn, function(req, res) {
    controllerRecurso.save(req, res, upload, function(status) {
      if (status) {
        res.render('pages/confirm.ejs');
      }
    });
  });
  app.get('/recursos', function(req, res) {
    controllerRecurso.findAll(req, res);
  });
  app.delete('/recursos/:id', isLoggedIn, function(req, res) {
    controllerRecurso.delete(req, res);
  });
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}