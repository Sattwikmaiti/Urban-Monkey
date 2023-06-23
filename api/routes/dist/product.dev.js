"use strict";

var Product = require("../models/Product");

var _require = require("./verifyToken"),
    verifyToken = _require.verifyToken,
    verifyTokenAndAuthorization = _require.verifyTokenAndAuthorization,
    verifyTokenAndAdmin = _require.verifyTokenAndAdmin;

var router = require("express").Router(); //CREATE


router.post("/", verifyTokenAndAdmin, function _callee(req, res) {
  var newProduct, savedProduct;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          newProduct = new Product(req.body);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(newProduct.save());

        case 4:
          savedProduct = _context.sent;
          res.status(200).json(savedProduct);
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

router.put("/:id", verifyTokenAndAdmin, function _callee2(req, res) {
  var updatedProduct;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 3:
          updatedProduct = _context2.sent;
          res.status(200).json(updatedProduct);
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

router["delete"]("/:id", verifyTokenAndAdmin, function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Product.findByIdAndDelete(req.params.id));

        case 3:
          res.status(200).json("Product has been deleted...");
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
}); //GET PRODUCT

router.get("/find/:id", function _callee4(req, res) {
  var product;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Product.findById(req.params.id));

        case 3:
          product = _context4.sent;
          res.status(200).json(product);
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
}); //GET ALL PRODUCTS

router.get("/", function _callee5(req, res) {
  var qNew, qCategory, products;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          qNew = req.query["new"];
          qCategory = req.query.category;
          _context5.prev = 2;

          if (!qNew) {
            _context5.next = 9;
            break;
          }

          _context5.next = 6;
          return regeneratorRuntime.awrap(Product.find().sort({
            createdAt: -1
          }).limit(1));

        case 6:
          products = _context5.sent;
          _context5.next = 18;
          break;

        case 9:
          if (!qCategory) {
            _context5.next = 15;
            break;
          }

          _context5.next = 12;
          return regeneratorRuntime.awrap(Product.find({
            categories: {
              $in: [qCategory]
            }
          }));

        case 12:
          products = _context5.sent;
          _context5.next = 18;
          break;

        case 15:
          _context5.next = 17;
          return regeneratorRuntime.awrap(Product.find());

        case 17:
          products = _context5.sent;

        case 18:
          res.status(200).json(products);
          _context5.next = 24;
          break;

        case 21:
          _context5.prev = 21;
          _context5.t0 = _context5["catch"](2);
          res.status(500).json(_context5.t0);

        case 24:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[2, 21]]);
});
module.exports = router;