const router = require("express").Router();
const stripe = require("stripe")("sk_test_51MHUHCSBTEpl1Bvvhc01ct6KiHZNsGy68TjIByKunbbiGiSkTHEdEYmxNTJDiUuMYIxNeZiWJW8DQoKRN0QLgTzt00h7IozD50");
//price_1NQ2O0SBTEpl1BvvhxPafxWO
const options = { mode: 'shipping' };
router.post("/", async (req, res) => {
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
  
  const items = req.body;
  //console.log(items)
  let lineItems = [];
  items.map((item)=> {
      lineItems.push(
          {
              price: item.price_id,
              quantity: item.quantity,
             
          }
      )
  });

  console.log(lineItems);
  const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: "http://localhost:3000/",
      cancel_url: "http://localhost:3000/cart",
      
  }); 

  res.send(JSON.stringify({
      url: session.url
  }));
});

module.exports = router;



