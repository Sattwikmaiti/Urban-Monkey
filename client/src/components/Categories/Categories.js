import React from 'react'
import "./Categories.css"
import {useNavigate} from 'react-router-dom'

const Categories = () => {
  const navigate=useNavigate()
  return (
    <div> 
 <center><h1>CATEGORIES</h1></center>
      <div className="category">
           
        <div className="men"  onClick={()=>navigate('/products/category/men')}>

        </div>
        <div className="women" onClick={()=>navigate('/products/category/women')}>

        </div>
       <div className="kid" onClick={()=>navigate('/products/category/kid')}>

       </div>

      
     </div>
    </div>
    
  )
}

export default Categories
