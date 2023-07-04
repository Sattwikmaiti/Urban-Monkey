import React,{useState,useEffect} from 'react'
import "./Products.css"


import axios from "axios"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useLocation } from "react-router";
import loadingproduct from "../images/productloader.gif"
import Card from "../../components/Card/Card.js"

const Products = () => {


  const location = useLocation();
  const category = location.pathname.split("/")[3];
  
const [sort,setSort]=useState("newest")
const [filteredProducts, setFilteredProducts] = useState([]);
const [size,setSize]=useState("")
const[color,setColor]=useState("")
const[loading,setloading]=useState(false)
const filterByBrand = (filteredProducts) => {
  console.log(size)
  // Avoid filter for empty string
  if (size.length===0) {
    return filteredProducts;
  }

  const filteredCars = filteredProducts.filter(
    (car) => car.size===size
  );
  return filteredCars;
}

const filterByColor= (filteredProducts) => {
  // Avoid filter for empty string
  if (color.length===0) {
    return filteredProducts;
  }

  const filteredCars = filteredProducts.filter(
    (car) => car.color===color
  );
  return filteredCars;
}

useEffect(() => {
  // console.log(category)
  setloading(true)
   const getProducts = async () => {
     try {
       const res = await axios.get(
         category
           ? `http://localhost:8000/api/products/?category=${category}`
           : "http://localhost:8000/api/products/"
       );
       setloading(false)
       setFilteredProducts(res.data);
    
     } catch (err) {
       console.log(err)
     }
   };
   //console.log(data)
 
   getProducts();
 }, [category]);
 
 useEffect(()=>{
  setloading(true)
  const getProducts = async () => {
    try {
      const res = await axios.get(
        category
          ? `http://localhost:8000/api/products/?category=${category}`
          : "http://localhost:8000/api/products/"
      );
      setFilteredProducts(filterByColor(filterByBrand(res.data)));
      //setFilteredProducts(filterByColor(res.data));
      if (sort === "newest") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.updatedAt - b.updatedAt)
          
        );
      } else if (sort === "asc") {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.newPrice - b.newPrice)
        );
      } else {
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.newPrice - a.newPrice)
        );
      }
   
      setloading(false)
    } catch (err) {
      console.log(err)
    }
  };
  //console.log(data)

  getProducts();




 },[size,color,sort])

  return (
  
  
    <div>
     <Navbar />
     <div className="wrapper1">
       <div className="left">

       <div className="brand-filter">
        <div>Filter by Size :</div>
        <select
          id="brand-input"
          value={size}
          onChange={(e)=>{setSize(e.target.value); }}
        >
          <option value="">All</option>
          <option value="xxl">XXL</option>
          <option value="xl">XL</option>
          <option value="l">L</option>
        </select>
      </div>

             
      <div className="brand-filter">
        <div>Filter by Colour :</div>
        <select
          id="brand-input"
          value={color}
          onChange={(e)=>{setColor(e.target.value); }}
        >
          <option value="">All</option>
          <option value="yellow">Yellow</option>
          <option value="black">Black</option>
          <option value="pink">Pink</option>
        </select>
      </div>

      <div className="brand-filter">
        <div>Sort :</div>
        <select
          id="brand-input"
          value={sort}
          onChange={(e)=>{setSort(e.target.value); }}
        >
          <option value="newest">newest</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        
        </select>
      </div>







           {/*<div className="bycat">
                 By Categories
                 <div className="label1">
                 <input type="checkbox" value={"shoes"}  onChange={handlefilters}/><label htmlFor='1' >Shoes</label>
                 </div>
                 <div className="label1">
                 <input type="checkbox" value={"women"}  onChange={handlefilters}/><label htmlFor='2' >Women</label>
                 </div>
                
                 <div className="label1">
                 <input type="checkbox" value={"men"}  onChange={handlefilters}/><label htmlFor='3' >Men</label>
                 </div>
                
                
           </div>
           <div className="bysize">
           
            <FormControl fullWidth>
        <InputLabel id="demo-simple-div-label">Size</InputLabel>
        <div
          labelId="demo-simple-div-label"
          id="demo-simple-div"
          name="size"
          label="Size"
          onChange={handlefilters}
        >
          <MenuItem  value={"xl"}>XL</MenuItem>
          <MenuItem value={"xxl"}>XXL</MenuItem>
          <MenuItem value={"small"}>Small</MenuItem>
        </div>
      </FormControl>
           
           </div>
           <div className="price">
  By Price
           <Slider
  aria-label="Temperature"
  defaultValue={30}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={50}
  marks
  min={10}
  max={400}
  onChange={(e)=>setmaxprice(e.target.value)}
/>
           </div>
           <div className="sort">
             Sort by
             <div className="label">
                 <input type="radio" id="asc" value="asc" name="price" onChange={()=>setSort("asc")}/><label htmlFor='asc' >Price by Lowest First</label>
                 </div>
                 <div className="label">
                 <input type="radio" id="desc" value="desc" name="price"  onChange={()=>setSort("desc")}/><label htmlFor="desc" >Price by highest first</label>
                 </div>
                 <div className="label">
                 <input type="radio" id="newest" value="newest" name="price"  onChange={()=>setSort("newest")}/><label htmlFor="newest" >Price by newest</label>
                 </div>
                
                
           </div> */}






          
         
         
          {/*<div className="sort">
             Sort by
             <div className="label">
                 <input type="radio" id="asc" value="asc" name="price" onClick={()=>{setSort("asc")}}/><label htmlFor='asc' >Price by Lowest First</label>
                 </div>
                 <div className="label">
                 <input type="radio" id="desc" value="desc" name="price"  onClick={()=>setSort("desc")}/><label htmlFor="desc" >Price by highest first</label>
                 </div>
                 <div className="label">
                 <input type="radio" id="newest" value="newest" name="price"  onClick={()=>setSort("newest")}/><label htmlFor="newest" >Price by newest</label>
                 </div>
                
                
          </div>*/}

       
          
         
         {/**  <div className="sort">
             Filter by Size
             <div className="label">
                 <input type="radio" id="xxl" value="xxl" name="size" onChange={handlefilters}/><label htmlFor='xxl' >XXL</label>
                 </div>
                 <div className="label">
                 <input type="radio" id="xl" value="xl" name="size"  onChange={handlefilters}/><label htmlFor="xl" >Xl</label>
                 </div>
                 <div className="label">
                 <input type="radio" id="l" value="l" name="size"  onChange={handlefilters}/><label htmlFor="l" >Large</label>
                 </div>
                
                
           </div>*/}
          
          {/** <div className="sort">
             Filter by Color
             <div className="label">
                 <input type="radio" id="yellow" value="yellow" name="color" onChange={handlefilters}/><label htmlFor='yellow' >Yellow</label>
                 </div>
                 <div className="label">
                 <input type="radio" id="black" value="black" name="color"  onChange={handlefilters}/><label htmlFor="black" >Black</label>
                 </div>
                 <div className="label">
                 <input type="radio" id="green" value="green" name="color"  onChange={handlefilters}/><label htmlFor="green" >Green</label>
                 </div>
                
                
           </div>*/} 
          



       
        
       </div>

       <div className="right">
        { loading===true ? <>
        
        <img src={loadingproduct}/></>:<>
        {
            filteredProducts.map((item)=>
            {
              return (<Card item={item} id={item.id} key={item.id}/>)
            })
       }
        </>}
      
           
            
       </div>
     </div>
      <Footer />
    </div>
  )
}

export default Products
