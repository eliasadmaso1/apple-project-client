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
import Users from "./components/pages/Admin/Users/Users";
import ProductsComponent from "./components/pages/products/component/ProductsComponent";
import mac from './components/images/mac.png';
import iphone from './components/images/iphone.png';
import ipad from './components/images/ipads-back.png';
import airPods from './components/images/airPodsPro.png';
import watch from './components/images/watch-back.png';



function App() {

  const [user,setUser] = useState();
  const [toggle,setToggle] = useState(true);

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
    <ContextProvider value={{ user, toggle, changeToggle}}>
    <BrowserRouter>
      <Navbar/>

     
      <Routes>
        <Route path="/apple-project-client" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        {/* <Route path="/iPhone" element={<IPhone />} />
        <Route path="/iPad" element={<IPad />} />
        <Route path="/airPods" element={<AirPods />} />
        <Route path="/watches" element={<Watch />} /> */}
        <Route path="/mac" element={<ProductsComponent categoryProp={"MacBook"} pageBackground={"dark"} cardImgWidth={"250px"} headerImg={mac} pageTitle={"MacBook"} />} />
        <Route path="/iPhone" element={<ProductsComponent categoryProp={"iPhone"} pageBackground={"light"} cardImgWidth={"220px"} headerImg={iphone} pageTitle={"IPhones"} />} />
        <Route path="/iPad" element={<ProductsComponent categoryProp={"iPads"} pageBackground={"light"} cardImgWidth={"220px"} headerImg={ipad} pageTitle={"IPads"} />} />
        <Route path="/airPods" element={<ProductsComponent categoryProp={"airPods"} pageBackground={"light"} cardImgWidth={"220px"} headerImg={airPods} pageTitle={"AirPods"} />} />
        <Route path="/watches" element={<ProductsComponent categoryProp={"Watches"} pageBackground={"light"} cardImgWidth={"220px"} headerImg={watch} pageTitle={"Apple Watches"} />} />

         <Route path="/product/:id" element={<Product />} />
         <Route path="/admin/products" element={<Products/>} />
         <Route path="/admin/users" element={<Users/>} />
         <Route path="/admin/products/edit/:id" element={<EditProduct />} />
         <Route path="/cart" element={<Cart />} />





      </Routes>
      <Footer />
    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
