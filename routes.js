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
  //==============================================USER
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
      user: req.user // get the user out of session and pass to template
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
  //=============================================ADMIN

  app.get('/admin', isLoggedIn, function(req, res) {
    res.render('pages/admin.ejs', {
      user: req.user
    });
  });

  //=============================================HOTEL
  app.get('/hotel', isLoggedIn, function(req, res) {
    res.render('pages/hotel.ejs', {
      user: req.user
    });
  });
  app.post('/api/hoteles', isLoggedIn, function(req, res) {
    controllerHotel.save(req, res, upload);
  });
  app.get('/api/hoteles', function(req, res) {
    controllerHotel.findAll(req, res);
  });
  app.delete('/api/hoteles/:id', isLoggedIn, function(req, res) {
    controllerHotel.delete(req, res);
  });
};


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}