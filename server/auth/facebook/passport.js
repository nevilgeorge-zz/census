var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

exports.setup = function (User, config) {
  passport.use(new FacebookStrategy({
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
      User.findOne({
        'facebook.id': profile.id
    },
    function(err, user) {
        if (err) {
          return done(err);
      }
      if (!user) {
          user = new User({
            firstName: profile.name.givenName,
            secondName: profile.name.familyName,
            email: profile.emails[0].value,
            facebook: profile._json,
            token: accessToken,
        });
          user.save(function(err) {
            if (err) done(err);
            return done(err, user);
        });
      } else {
          return done(err, user);
      }
  })
  }
  ));
};
