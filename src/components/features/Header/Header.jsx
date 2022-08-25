import React from 'react';
import './Header.css';
import AppleIcon from '@mui/icons-material/Apple';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-container">
            <span className="link"><AppleIcon style={{fontSize:"20px"}}/></span>
            <Link to="/apple-project-client" className="link">Home</Link>
            <Link to="/mac" className="link">Mac</Link>
            <span className="link">iPhon</span>
            <span className="link">iPad</span>
            <span className="link">AirPods</span>
            <Link to="/registration" className="link"><PersonIcon style={{fontSize:"20px"}}/></Link>



            
        </div>
    )
}

export default Header
