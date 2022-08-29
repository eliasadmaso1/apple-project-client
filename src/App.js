import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/pages/Auth/Registration/Registration";
import Login from "./components/pages/Auth/Login/Login";
import Footer from "./components/features/Footer/Footer";
import Header from "./components/features/Header/Header";
import Card from "./components/features/Card/Card";
import Mac from "./components/pages/products/mac/Mac";
import Headphones from "./components/pages/products/headphones/Headphones";
import Slider from "./components/features/Slider/Slider";
import Product from "./components/pages/product/product";
import Modal from "./components/features/Modal/Modal";
import { getAllUsers, deleteUser } from "./components/service/users";
import Home from "./components/pages/Home/Home";
import Products from "./components/pages/Admin/Products/Products";

function App() {
 

  return (
    <BrowserRouter>
      <Header />
     
      <Routes>
        <Route path="/apple-project-client" element={<Home/>} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/product" element={<Product />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
