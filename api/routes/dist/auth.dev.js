"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//register  note: we dont use res.save() as it takes time ,and 
//if we do const user =res.save()  , console.log(user)
// It shows error,,as before the user is created ,due to some milliseconds
//so we use async function ,so to create the user ,then we get it.
var router = require("express").Router();

var User = require("../models/User");

var CryptoJS = require("crypto-js");

var jwt = require("jsonwebtoken"); //REGISTER


router.post("/register", function _callee(req, res) {
  var newUser, savedUser, _savedUser$_doc, password, others;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
          });
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(newUser.save());

        case 4:
          savedUser = _context.sent;
          _savedUser$_doc = savedUser._doc, password = _savedUser$_doc.password, others = _objectWithoutProperties(_savedUser$_doc, ["password"]);
          console.log(others);
          res.status(201).json(savedUser);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          res.status(500).json(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 10]]);
}); //LOGIN

router.post('/login', function _callee2(req, res) {
  var user, hashedPassword, originalPassword, inputPassword, accessToken, _user$_doc, password, others;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            username: req.body.username
          }));

        case 3:
          user = _context2.sent;
          !user && res.status(401).json("Wrong User Name");
          hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
          originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
          inputPassword = req.body.password;
          originalPassword != inputPassword && res.status(401).json("Wrong Password");
          accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
          }, process.env.JWT_SEC, {
            expiresIn: "3d"
          });
          _user$_doc = user._doc, password = _user$_doc.password, others = _objectWithoutProperties(_user$_doc, ["password"]);
          res.status(200).json(_objectSpread({}, others, {
            accessToken: accessToken
          }));
          _context2.next = 17;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json(_context2.t0);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 14]]);
}); //get info

router.get('/:id', function _callee3(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(User.findById(req.params.id));

        case 2:
          user = _context3.sent;
          res.status(200).json(user);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
module.exports = router;