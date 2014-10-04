'use strict';

var _ = require('lodash');
var Student = require('./Student.model');

// Get list of Students
exports.index = function(req, res) {
  Student.find(function (err, Students) {
    if(err) { return handleError(res, err); }
    return res.json(200, Students);
  });
};

// Get a single Student
exports.show = function(req, res) {
  Student.findById(req.params.id, function (err, Student) {
    if(err) { return handleError(res, err); }
    if(!Student) { return res.send(404); }
    return res.json(Student);
  });
};

// Creates a new Student in the DB.
exports.create = function(req, res) {
  Student.create(req.body, function(err, Student) {
    if(err) { return handleError(res, err); }
    return res.json(201, Student);
  });
};

// Updates an existing Student in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Student.findById(req.params.id, function (err, Student) {
    if (err) { return handleError(res, err); }
    if(!Student) { return res.send(404); }
    var updated = _.merge(Student, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, Student);
    });
  });
};

// Deletes a Student from the DB.
exports.destroy = function(req, res) {
  Student.findById(req.params.id, function (err, Student) {
    if(err) { return handleError(res, err); }
    if(!Student) { return res.send(404); }
    Student.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}