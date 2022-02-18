let User = require('../models/user');
let passport = require('passport');

exports.user = function (req, res, next) {
    res.render('user', {
        title: 'Users',
        userName: req.user ? req.user.username : ''

    });
}


function getErrorMessage(err) {
    console.log("===> Erro: " + err);
    let message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    return message;
};

module.exports.renderSignup = function (req, res, next) {
    if (req.user) {
        return res.redirect('/');
    }
    if (!req.user) {

        console.log("renders ok")
        let newUser = User();

        res.render('auth/signup', {
            title: 'Sign-up Form',
            messages: req.flash('error'),
            user: newUser,
            userName: req.user ? req.user.username : ''

        });

    } else {
        console.log(res.body)
        return res.redirect('/');
    }
};


module.exports.signup = function (req, res, next) {

    if (!req.user) {
        console.log("sign up")

        console.log(req.body);

        let user = new User(req.body);

        user.save((err) => {
            if (err) {
                let message = getErrorMessage(err);

                req.flash('error', message);
                return res.render('auth/signup', {
                    title: 'Sign-up Form',
                    messages: req.flash('error'),
                    user: user,
                    userName: req.user ? req.user.username : ''

                });
            }
            req.login(user, (err) => {
                if (err) return next(err);
                return res.redirect('/');
            });
        });
    } else {
        console.log("else")

        return res.redirect('/');
    }
};


module.exports.signin = function (req, res, next) {
    passport.authenticate('local', {
        successRedirect: req.session.url || '/',
        failureRedirect: '/users/signin',
        failureFlash: true
    })(req, res, next);
    delete req.session.url;
}


module.exports.renderSignin = function(req, res, next) {
    if (!req.user) {
      res.render('auth/signin', {
        title: 'Sign-in Form',
        messages: req.flash('error') || req.flash('info'),
        userName: req.user ? req.user.username : ''

      });
    } else {
      console.log(req.user);
      return res.redirect('/');
    }
  };


module.exports.signout = function (req, res, next) {
    console.log("outtt")
    req.logout();
    res.redirect('/');
};
