import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/pages/Auth/Registration/Registration";
import Login from "./components/pages/Auth/Login/Login";
import Footer from "./components/features/Footer/Footer";
import Mac from "./components/pages/products/mac/Mac";
import Product from "./components/pages/product/product";
import Home from "./components/pages/Home/Home";
import Products from "./components/pages/Admin/Products/Display/Products";
import Navbar from "./components/features/Navbar/Navbar";
import IPhone from "./components/pages/products/iPhone/IPhone";
import IPad from "./components/pages/products/iPad/IPad";
import AirPods from "./components/pages/products/airPods/AirPods";
import EditProduct from './components/pages/Admin/Products/Edit/Product';
import Cart from "./components/pages/Cart/Cart";
import {ContextProvider} from './components/context/context';
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

function App() {

  const [user,setUser] = useState();
  const [toggle,setToggle] = useState();

  const changeToggle = ()=>{
    setToggle(prev => !prev);
  };

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (token) {
      const _user = jwt.verify(token, "eliasadmaso");
      setUser(_user);
    }

  },[]);

 

  return (
    <ContextProvider value={{ user, toggle, changeToggle  }}>
    <BrowserRouter>
      <Navbar/>
     
      <Routes>
        <Route path="/apple-project-client" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/iPhone" element={<IPhone />} />
        <Route path="/iPad" element={<IPad />} />
        <Route path="/airPods" element={<AirPods />} />
         <Route path="/product/:id" element={<Product />} />
         <Route path="/admin/products" element={<Products />} />
         <Route path="/admin/products/edit/:id" element={<EditProduct />} />
         <Route path="/cart" element={<Cart />} />




      </Routes>
      <Footer />
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
