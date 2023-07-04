import React,{useState,useEffect} from 'react'
import "./Cart.css"
import p1 from "../images/img1.avif"
import p2 from "../images/img2.jpg"
import p3 from "../images/img3.jpg"
import p4 from "../images/img4.jpg"
import p5 from "../images/img7.jpg"
import p6 from "../images/img6.avif"
import DeleteIcon from '@mui/icons-material/Delete';
import {useSelector} from "react-redux"
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"
const Cart = () => {
  const datas=useSelector((state)=>state.cart)
  //console.log(datas)
  const key="pk_test_51MHUHCSBTEpl1BvvLtdXwfP7EglQuD4KCX9Y0wByVXPnY11wsK3u4Y56HlkIvGwaxEx4kEtmxOamEivZUbBEBrzd005hHxI8k4"
  const [stripetoken,setstripetoken]=useState(null)
  const onToken = (token) => {
  
    setstripetoken(token)
  };
  console.log(datas.products)
  const data = [
    {
      id: "apnidukaanecommerceproduct-1",
      img1: p2,
      img2: p4,
      title: "Ray Ban",
      desc:"lorem ipsum dolor sit amet, lorem ipsum dolor sit ametlorem ipsum dolor sit ametcon lorem ipsum lorem ipsum lor",
      isNew: false,
      oldPrice: 200,
      newPrice: 122,
    },
   
    {
      id: "apnidukaanecommerceproduct-2",
      img1: p2,
      img2: p3,

      title: "Ray Ban",
      desc:"lorem ipsum dolor sit amet, lorem ipsum dolor sit ametlorem ipsum dolor sit ametcon lorem ipsum lorem ipsum lor",
      isNew: true,
      oldPrice: 200,
      newPrice: 132,
    },
    {
      id: "apnidukaanecommerceproduct-3",
      img1: p2,
      img2: p4,
      title: "Ray Ban",
      desc:"lorem ipsum dolor sit amet, lorem ipsum dolor sit ametlorem ipsum dolor sit ametcon lorem ipsum lorem ipsum lor",
      isNew: true,
      oldPrice: 232,
      newPrice: 131,
    },
  ];


  
 const makerequest=async()=>{
  try{
    await axios.post("http://localhost:8000/api/checkout",datas.products).then((response)=>  window.location.assign(response.data.url))
//console.log(response.data)
  }catch(err)
  {
    console.log(err)
  }
     
  
    
   
    }
    
  return (
    <div>
      <div className="cart">
            
        <div className="detailcart">
         
          <div className="payment" style={{margin:'1rem'}}>
          <div className="totalprice">
            <div className="subtotal">
              <h4>Subtotal: <span>Rs {datas.total}</span></h4>
            </div>
            <div className="subtotal">
              <h4>Shipping charges: Rs 455</h4>
            </div>
            <div className="subtotal">
              <h4>Discount: Rs 55</h4>
            </div>
            <div className="subtotal">
              <h4>Pay Amount: Rs {datas.total+455-55}</h4>
            </div>
            <div className="subtotal ">
              <h4>  <
            >
              <button onClick={makerequest}>CHECKOUT NOW</button>
            </></h4>
            </div>
          </div>
         
          </div>
    
          <div className="productschema">
          <h4 style={{margin:'1rem'}}>Products in your Cart</h4>
            {
              datas.products.map((e)=>
              {
                return (
                  <div>

                    <div className="short">
                      <div className="imgshort">
                      <img src={e.img1}  style={{height:'10rem',width:'10rem'}}/>
                      </div>
                      <div className="descshort">
                        <h4>{e.title}</h4>

                        <p>{e.desc?.substring(0, 100)}</p>
                         <div className="costshort">
                          Quantity = {e.quantity} *  Rs {e.newPrice}
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
