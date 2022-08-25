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

function App() {
  const DATA = [
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000",
    "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
    "https://media.istoreil.co.il/57482e8d-29d5-4d9f-84d5-bd696304a4e0/https://www.istoreil.co.il/media/catalog/product/cache/1/small_image/500x500/0dc2d03fe217f8c83829496872af24a0/m/b/mbp13-2020_hero1_2.png/ns_atwebp,f_auto",
    "https://www.ivory.co.il/files/catalog/org/1639412008e08OG.jpg",
  ];

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
      <Modal data={DATA} title="MacBook Pro 13" price={1200} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
