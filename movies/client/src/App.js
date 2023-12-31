import React,{useState,useEffect} from 'react'
import axios from 'axios'
import MovieList from './Movie'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'


import "./App.css"
const App = () => {
  const key="49a1706039076b3c2ce3afa164d74e4d"

  const [database,setDatabase] = useState([])
   const [box,setbox]=useState(null)
   const [recommend, setRecommend] = useState([]);
   const [error, setError] = useState(false);
  useEffect(() => { 

    axios.get('http://localhost:5000/get_binary_pickle_data')
    .then(res => {
      console.log(res)
      setDatabase(res.data)
    })
    .catch(err => {
      console.log(err)
    })



  },[])
  const handleSubmit = async () => {
   // console.log(box)
    //e.preventDefault();
    console.log("Clicked",selectedValue)
    setError(false);
    try {
      //TBDB api call
      const res = await axios.post(`http://localhost:5000/get_recommendation`, {
        'movie_title': selectedValue,
      });
      console.log(res)
      setRecommend(res.data);
      //console.log(res)
    } catch (err) {
      console.log("not found")
      setError(true);

    }
  };
 const [selectedValue, setSelectedValue] = useState('');

  const handleOnSelect = (item) => {
    //item.preventDefault();
    setSelectedValue(item.name);
    console.log(selectedValue)
  };

  return (
    <div className="screen">
      
      <button type="button" class="btn btn-outline-dark" onClick={handleSubmit}>Find</button>
      <div className="recommended">
     {/* <MovieList data={recommend} />
      */}
      {
        recommend.map((item) => { 
          return <p>{item}</p>
        })
      }
     </div>
    
     
      
          <ReactSearchAutocomplete
      items={database.map((item) => ({ id: item, name: item }))}
      onSelect={handleOnSelect}
      autoFocus
      styling={{
        width: "50px",
        height: "50px",
        border: "1px solid darkgreen",
        borderRadius: "4px",
        backgroundColor: " white",
        boxShadow: "none",
        hoverBackgroundColor: "lightgreen",
        color: "darkgreen",
        fontSize: "12px",
        fontFamily: "Courier",
        iconColor: "green",
        lineColor: "lightgreen",
        placeholderColor: "darkgreen",
        clearIconMargin: "3px 8px 0 0",
        zIndex: 2,
        padding :'5rem'
      }}
    />
   




    
    </div>
  )
}

export default App
