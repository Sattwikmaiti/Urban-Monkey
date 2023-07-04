import React ,{useState,useEffect}from 'react'
import "./Product.css"
import p2 from "../images/img2.jpg"
import p3 from "../images/img3.jpg"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useLocation } from "react-router";
import axios from "axios"
import {useSelector,useDispatch} from "react-redux"
import  {addProduct} from "../../redux/cartRedux.js"
import loadingproduct from "../images/productloader.gif"
const Product = () => {
  const [loading,setloading] =useState(false)
 
  const dispatch=useDispatch()
  const [select,setselect]=useState(0)
  const [quantity,setquantity] = useState(1);


  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [data,setData]=useState()

  useEffect(() => {
  setloading(true)
   const getProducts = async () => {
     try {
       const res = await axios.get(
        `http://localhost:8000/api/products/find/${id}`
          
       );
 setloading(false)
       setData(res.data);
       //console.log(data)
     } catch (err) {
       console.log(err)
     }
   };
   //console.log(data)
 
   getProducts();
 }, [id]);

 const handleaddtocart=()=>
 {  console.log(data)
    const price=data?.newPrice;
    const id= data?._id;
   
     dispatch(addProduct({...data,id,price,quantity}))

 }
 const images=[data?.img1,data?.img2];
  return (
    <div>
      <Navbar />
      {
        loading ===true ? <><img src={loadingproduct}/></> :
        <>
        <div className="boxx">
<div className="imagess">
<div className="preview">

 <img src={data?.img1} onClick={()=>setselect(0)}/>

<img src={data?.img2} onClick={()=>setselect(1)}/>

</div>
<div className="mainimg">
 <img src={images[select]} />
</div>
      </div>
      <div className="detailss">

        <h2>{data?.title}</h2>
         <p>Size : {data?.size}
         </p>
         <p>Posted by {new Date(data?.createdAt).getDate()}/{new Date(data?.createdAt).getMonth()}/{new Date(data?.createdAt).getFullYear()}</p>
        <p> {data?.desc}
        </p>
<div className="cost">
  Rs {quantity*data?.newPrice} only
</div>

<div className="buttons">
  <button onClick={()=>setquantity((prev)=> prev===1? 1:prev-1)}>-</button>
  <div>{quantity}</div>
  <button  onClick={()=>setquantity((prev)=>prev+1)}>+</button>
</div>
<button>
<div className="add" onClick={handleaddtocart}>
  <AddShoppingCartIcon /> <span>Add to Cart</span>
</div>
</button>

<div className="linksitem">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Luis Philipe</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Men, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
      
</div>
      </>
      }

      <Footer />
    </div>
  )
}

export default Product
