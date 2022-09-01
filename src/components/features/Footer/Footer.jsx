import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h4 className="footer-title">Products</h4>
        <span className="footer-item">Mac</span>
        <span className="footer-item">iPhone</span>
        <span className="footer-item">iPad</span>
        <span className="footer-item">AirPods</span>

    
      </div>
      <div className="footer-section">
      <h4 className="footer-title">Contact</h4>
      <FacebookOutlinedIcon className="footer-item"/>
      <WhatsAppIcon className="footer-item"/>
      <TwitterIcon className="footer-item"/>
      <InstagramIcon className="footer-item"/>
      <YouTubeIcon className="footer-item"/>

      </div>
      <div className="footer-section">
      <h4 className="footer-title">Activity Time</h4>
      <span className="footer-item">Sunday 8:00 - 20:00</span>
      <span className="footer-item">Monday 8:00 - 20:00</span>
      <span className="footer-item">Tuesday 8:00 - 20:00</span>
      <span className="footer-item">Wednesday 8:00 - 20:00</span>
      <span className="footer-item">Thursday 8:00 - 20:00</span>
      <span className="footer-item">Friday 8:00 - 20:00</span>
      <span className="footer-item">Saturday 8:00 - 20:00</span>




      </div>
    </div>
  );
};

export default Footer;
