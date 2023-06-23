import Product from "./pages/Product/Product";
import Home from "./pages/Home/Home";
import ProductList from "./pages/Products/Products";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./components/Cart/Cart";
import Success from "./pages/Success/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
 
} from "react-router-dom";



const App = () => {
  let user =true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route  path="/products/category/:id" element={<ProductList />}/>
        <Route  path="/products/:id" element={<Product />}/>
        
        <Route path="/cart" element={<Cart />}/>
        <Route path="/success" element={<Success />}/>
        <Route path="/login" element={user ? <Home />:  <Login />}/>
        <Route path="/register"element={user ? <Home />: <Register />}/>
       
      </Routes>
    </Router>
  );
};

export default App;