import React,{useEffect,useState} from 'react'
import "./List.css"
import Card from "../Card/Card.js"
import p1 from "../images/img1.avif"
import p2 from "../images/img2.jpg"
import p3 from "../images/img3.jpg"
import p4 from "../images/img4.jpg"
import p5 from "../images/img7.jpg"
import p6 from "../images/img6.avif"
import axios from "axios"

const List = ({category}) => {
 const [data,setData]=useState([])

 useEffect(() => {
  console.log(category)
  const getProducts = async () => {
    try {
      const res = await axios.get(
        category
          ? `http://localhost:8000/api/products/?category=${category}`
          : "http://localhost:8000/api/products/"
      );
      setData(res.data);
    } catch (err) {
      console.log(err)
    }
  };
  console.log(data)

  getProducts();
}, [category,data]);
  return (
    <div>
        <div className="carddesign">
           {
            data.map((item)=>
            {
              return (<Card item={item} id={item.id} />)
            })
           }
      </div>
    </div>
  )
}

export default List
