import React,{useState} from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import Cart from '../Cart/Cart.js'
import logo from "../images/logo.png"
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [opencart,setopencart]=useState(false);
  const cart=useSelector(state=>state.cart);
  console.log(cart);
  return (
    <div>
      <div className="navbar">
        <div className="options">
               <div>Men</div>
               <div>Women</div>
               <div>Children</div>
               <div>Accessories</div>
        </div>
        <div className="storename">
               <img src={logo}  style={{height:'3rem',width:'3rem',padding:'0.2rem',border:'1px solid black'}}/>
        </div>
        <div className="privatedetails">
           <div>Home</div>
           <div>About</div>
           <div>Contact</div>
           <div>Stores</div>
          <div className="icons">

          <SearchIcon/>
           <PersonIcon/>
           <FavoriteIcon/>
           <Badge badgeContent={cart.quantity} color="secondary">
            <Link to="/cart">
            <AddShoppingCartIcon  />
            </Link>
            
           </Badge>

          </div>
           
        </div>
      </div>
      {opencart && <Cart />}
    </div>
    
  )
}

export default Navbar
