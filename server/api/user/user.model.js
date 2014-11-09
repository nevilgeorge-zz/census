'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  secondName: String,
  profilePic: String,
  token: String,
  classes: Object,
  active: Boolean
});

module.exports = mongoose.model('User', UserSchema);