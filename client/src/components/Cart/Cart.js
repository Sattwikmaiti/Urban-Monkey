import React from 'react'
import "./Cart.css"
import p1 from "../images/img1.avif"
import p2 from "../images/img2.jpg"
import p3 from "../images/img3.jpg"
import p4 from "../images/img4.jpg"
import p5 from "../images/img7.jpg"
import p6 from "../images/img6.avif"
import DeleteIcon from '@mui/icons-material/Delete';


const Cart = () => {
  const data = [
    {
      id: 1,
      img1: p2,
      img2: p4,
      title: "Ray Ban",
      desc:"lorem ipsum dolor sit amet, lorem ipsum dolor sit ametlorem ipsum dolor sit ametcon lorem ipsum lorem ipsum lor",
      isNew: false,
      oldPrice: 200,
      newPrice: 122,
    },
   
    {
      id: 3,
      img1: p2,
      img2: p3,

      title: "Ray Ban",
      desc:"lorem ipsum dolor sit amet, lorem ipsum dolor sit ametlorem ipsum dolor sit ametcon lorem ipsum lorem ipsum lor",
      isNew: true,
      oldPrice: 200,
      newPrice: 132,
    },
    {
      id: 4,
      img1: p2,
      img2: p4,
      title: "Ray Ban",
      desc:"lorem ipsum dolor sit amet, lorem ipsum dolor sit ametlorem ipsum dolor sit ametcon lorem ipsum lorem ipsum lor",
      isNew: true,
      oldPrice: 232,
      newPrice: 131,
    },
  ];
  return (
    <div>
      <div className="cart">
            
        <div className="detailcart">
         
          <div className="payment" style={{margin:'1rem'}}>
          <div className="totalprice">
            Subtotal = Rs 53345
          </div>
          <button>CheckOut to Payment Gateway</button>
          </div>
    
          <div className="productschema">
          <h4 style={{margin:'1rem'}}>Products in your Cart</h4>
            {
              data.map((e)=>
              {
                return (
                  <div>

                    <div className="short">
                      <div className="imgshort">
                      <img src={e.img1}  style={{height:'5rem',width:'5rem'}}/>
                      </div>
                      <div className="descshort">
                        <h4>{e.title}</h4>
                        <p>{e.desc?.substring(0, 100)}</p>
                         <div className="costshort">
                          Quantity = 1 * {e.newPrice}
                         </div>
                         <div className="delete">
                          <DeleteIcon />
                         </div>
                      </div>
                      
                    </div>



                  </div>
                )

              })
            }
          </div>
         
        </div>
      </div>

    </div>
  )
}

export default Cart
