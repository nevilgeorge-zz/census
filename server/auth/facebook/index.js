'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();

router
  .get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['email', 'user_about_me'],
    session: false
  }))

  .get('/auth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/main',
    session: false
  }));

module.exports = router;
