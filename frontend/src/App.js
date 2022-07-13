import Home from './pages/home/Home'
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Topbar from './components/topbar/Topbar';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
function App() {
  return (
    <Router>
      <>
        

        
        <Routes>
        <Route exact path="/" element={<Login />}/>

          <Route  path="/home" element={<Home />}/>
            
 
          <Route path="/users" element={<UserList />}/>
          <Route path="/user/:userId" element={<User />}/>
          <Route path="/newuser" element={<NewUser />}/>
          <Route path="/product" element={<ProductList />}/>
          <Route path="/product/:productId" element={<Product />}/>
          <Route path="/newproduct" element={<NewProduct />}/>


          
          </Routes>
      </>
      </Router>
  );
}

export default App;
