"use strict";

var jwt = require("jsonwebtoken");

var CryptoJS = require("crypto-js");

var verifyToken = function verifyToken(req, res, next) {
  var authHeader = req.headers.token;

  if (authHeader) {
    var token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, function (err, user) {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

var verifyTokenAndAuthorization = function verifyTokenAndAuthorization(req, res, next) {
  verifyToken(req, res, function () {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

var verifyTokenAndAdmin = function verifyTokenAndAdmin(req, res, next) {
  verifyToken(req, res, function () {
    //console.log(req.user)
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that..Here !");
    }
  });
};

module.exports = {
  verifyToken: verifyToken,
  verifyTokenAndAuthorization: verifyTokenAndAuthorization,
  verifyTokenAndAdmin: verifyTokenAndAdmin
};