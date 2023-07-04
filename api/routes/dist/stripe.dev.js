"use strict";

var router = require("express").Router();

var stripe = require("stripe")("sk_test_51MHUHCSBTEpl1Bvvhc01ct6KiHZNsGy68TjIByKunbbiGiSkTHEdEYmxNTJDiUuMYIxNeZiWJW8DQoKRN0QLgTzt00h7IozD50"); //price_1NQ2O0SBTEpl1BvvhxPafxWO


var options = {
  mode: 'shipping'
};
router.post("/", function _callee(req, res) {
  var items, lineItems, session;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          /*
          req.body.items
          [
              {
                  id: 1,
                  quantity: 3
              }
          ]
           stripe wants
          [
              {
                  price: 1,
                  quantity: 3
              }
          ]
          */
          items = req.body; //console.log(items)

          lineItems = [];
          items.map(function (item) {
            lineItems.push({
              price: item.price_id,
              quantity: item.quantity
            });
          });
          console.log(lineItems);
          _context.next = 6;
          return regeneratorRuntime.awrap(stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: "http://localhost:3000/",
            cancel_url: "http://localhost:3000/cart"
          }));

        case 6:
          session = _context.sent;
          res.send(JSON.stringify({
            url: session.url
          }));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;