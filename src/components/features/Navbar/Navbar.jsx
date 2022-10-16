import React, { useEffect,useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useMyContext} from '../../context/context';
import Badge from '@mui/material/Badge';
import {getCartProducts} from '../../service/cart';




const Navbar = () => {

  const { user,changeToggle,toggle} = useMyContext();
  const [products,setProducts] = useState([]);
  const [modal,setModal] = useState(false);

  useEffect(()=>{
    const lengthOfCartProducts = async()=>{
      await getCartProducts(user._id).then(res => setProducts(res.data));
      changeToggle();
    };

    lengthOfCartProducts();
  


  },[user,toggle])

  const navRef = useRef();

  const handleChange = ()=>{
      navRef.current.classList.toggle('responsive-navbar');
      changeToggle();
  }

  const logOut = ()=>{
    localStorage.removeItem("token");
    window.location.replace("/apple-project-client")
  }

  return (
   <>{modal ?  <div className="modal-container">
   <div className="modal">
       <h3>Dont want to watch more products?</h3>
       <div className="modal-buttons">
       <button className="modal-button-ok" onClick={async()=>{
           setTimeout(()=>{
             logOut()
            setModal(false)
           },2000) 
       
       }}>Log-Out</button>
            <button className="modal-button" onClick={()=>{
           setModal(false)
       }}>Stay</button>
       </div>
   

   </div>

</div> : <header>
       <AppleIcon style={{ fontSize: "25px" }}/>
       <nav ref={navRef}>
  <Link to="/apple-project-client" onClick={handleChange}>Home</Link>
  <Link to="/mac" onClick={handleChange}>Mac</Link>
  <Link to="/iPhone" onClick={handleChange}>iPhone</Link>
  <Link to="/iPad" onClick={handleChange}>iPad</Link>
  <Link to="/airPods" onClick={handleChange}>AirPods</Link>
  <Link to="/watches" onClick={handleChange}>Watch</Link>
  {user?.isAdmin ? <Link to="/admin/products" onClick={handleChange}>Products</Link> : null}
  {user?.isAdmin ? <Link to="/admin/users" onClick={handleChange}>Users</Link> : null}
  {user ? <Link to="/cart" onClick={handleChange}>  <Badge badgeContent={products && products.length} color="primary">
  Cart
</Badge></Link> : null}
  {user ? null : <Link to="/login" onClick={handleChange}><PersonIcon/></Link>}
  {user ? <span className="logOut" onClick={()=>{
    setModal(true)
  }}>LogOut</span>: null}
  <button onClick={handleChange} className="nav-btn nav-close-btn">
    <CloseIcon style={{fontSize:"25px"}}/>
  </button>
</nav>
<button onClick={handleChange} className="nav-btn">
  <MenuIcon style={{fontSize:"25px"}}/>
</button>
    
    </header>}</>
  );
};

export default Navbar;
