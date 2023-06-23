import React from 'react'
import "./Card.css"
import {Link} from "react-router-dom"
const Card = ({item}) => {
 // console.log(item)
  let v=(((item.oldPrice-item.newPrice)/item.oldPrice)*100);
  return (
    

<div className="card">
      <div className="isnew">
      {item.isnew? "NEW":"OLD"}
      </div>
      

       
      <Link to={`/products/${item._id}`}>
        <div className="image">
        <img src={item.img1}  className="img1"/>
       <img src={item.img2}  className="img2"/>
        </div>
        </Link>
        <div className="title">
       {item.title} 
       ({item.color})
       ({item.size})
       </div> 
       
       <div className="old" >
        <div className="price1">
       Rs {item.oldPrice}   
        </div>
        <div className="price2">
       Rs {item.newPrice}  ( <span style={{fontSize:'1rem' ,color:'black'}}>{Math.floor(v)} % off</span>)
        </div>
        
       
       </div>
       
       
    </div>
   
   
  )
}

export default Card
