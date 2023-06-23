"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var User = require("../models/User");

var _require = require("./verifyToken"),
    verifyToken = _require.verifyToken,
    verifyTokenAndAuthorization = _require.verifyTokenAndAuthorization,
    verifyTokenAndAdmin = _require.verifyTokenAndAdmin;

var CryptoJS = require("crypto-js");

var router = require("express").Router(); //UPDATE


router.put("/:id", verifyTokenAndAuthorization, function _callee(req, res) {
  var updatedUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
          }

          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 4:
          updatedUser = _context.sent;
          res.status(200).json(updatedUser);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.status(500).json(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}); //DELETE

router["delete"]("/:id", verifyTokenAndAuthorization, function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findByIdAndDelete(req.params.id));

        case 3:
          res.status(200).json("User has been deleted...");
          _context2.next = 9;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json(_context2.t0);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
}); //GET USER

router.get("/find/:id", verifyTokenAndAdmin, function _callee3(req, res) {
  var user, _user$_doc, password, others;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(User.findById(req.params.id));

        case 3:
          user = _context3.sent;
          _user$_doc = user._doc, password = _user$_doc.password, others = _objectWithoutProperties(_user$_doc, ["password"]);
          res.status(200).json(others);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); //GET ALL USER

router.get("/", verifyTokenAndAdmin, function _callee4(req, res) {
  var query, users;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          query = req.query["new"];
          _context4.prev = 1;

          if (!query) {
            _context4.next = 8;
            break;
          }

          _context4.next = 5;
          return regeneratorRuntime.awrap(User.find().sort({
            _id: -1
          }).limit(5));

        case 5:
          _context4.t0 = _context4.sent;
          _context4.next = 11;
          break;

        case 8:
          _context4.next = 10;
          return regeneratorRuntime.awrap(User.find());

        case 10:
          _context4.t0 = _context4.sent;

        case 11:
          users = _context4.t0;
          res.status(200).json(users);
          _context4.next = 18;
          break;

        case 15:
          _context4.prev = 15;
          _context4.t1 = _context4["catch"](1);
          res.status(500).json(_context4.t1);

        case 18:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 15]]);
});
router.get("/stats", verifyTokenAndAdmin, function _callee5(req, res) {
  var date, lastYear, data;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          date = new Date();
          lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
          _context5.prev = 2;
          _context5.next = 5;
          return regeneratorRuntime.awrap(User.aggregate([//>=lastyear of this month 
          {
            $match: {
              createdAt: {
                $gte: lastYear
              }
            }
          }, {
            $project: {
              //creating new field month
              month: {
                $month: "$createdAt"
              }
            }
          }, {
            $group: {
              _id: "$month",
              total: {
                $sum: 1
              }
            }
          }]));

        case 5:
          data = _context5.sent;
          res.status(200).json(data);
          _context5.next = 12;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](2);
          res.status(500).json(_context5.t0);

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[2, 9]]);
});
module.exports = router;