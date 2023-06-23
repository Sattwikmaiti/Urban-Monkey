import React from "react";
import "./FeaturedProducts.css";
//import p1 from p2;
import p2 from "./img2.jpg";
import p3 from "./img3.jpg";
import p4 from "./img4.jpg";
import p5 from "./img5.jpg";
import Card from "../Card/Card.js"
const FeaturedProducts = ({ type }) => {
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
    <div className="wrapper">
      <div className="section">
        <h3>{type} Products</h3>
        <div className="desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
          laboriosam corporis quisquam voluptates a voluptatum eos quos
          excepturi provident expedita ratione asperiores, eveniet earum quo
          soluta, ex sapiente culpa at.
        </div>
          
        
      </div>
      <div className="carddesign">
           {
            data.map((item)=>
            {
              return (<Card item={item} id={item.id} />)
            })
           }
      </div>


      
    </div>
  );
};

export default FeaturedProducts;
