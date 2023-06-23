"use strict";

var Cart = require("../models/Cart");

var _require = require("./verifyToken"),
    verifyToken = _require.verifyToken,
    verifyTokenAndAuthorization = _require.verifyTokenAndAuthorization,
    verifyTokenAndAdmin = _require.verifyTokenAndAdmin;

var router = require("express").Router(); //CREATE


router.post("/", verifyToken, function _callee(req, res) {
  var newCart, savedCart;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          newCart = new Cart(req.body);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(newCart.save());

        case 4:
          savedCart = _context.sent;
          res.status(200).json(savedCart);
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
}); //UPDATE

router.put("/:id", verifyTokenAndAuthorization, function _callee2(req, res) {
  var updatedCart;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 3:
          updatedCart = _context2.sent;
          res.status(200).json(updatedCart);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //DELETE

router["delete"]("/:id", verifyTokenAndAuthorization, function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Cart.findByIdAndDelete(req.params.id));

        case 3:
          res.status(200).json("Cart has been deleted...");
          _context3.next = 9;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json(_context3.t0);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 6]]);
}); //GET USER CART

router.get("/find/:userId", verifyTokenAndAuthorization, function _callee4(req, res) {
  var cart;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Cart.findOne({
            userId: req.params.userId
          }));

        case 3:
          cart = _context4.sent;
          res.status(200).json(cart);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json(_context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // //GET ALL

router.get("/", verifyTokenAndAdmin, function _callee5(req, res) {
  var carts;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Cart.find());

        case 3:
          carts = _context5.sent;
          res.status(200).json(carts);
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json(_context5.t0);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;