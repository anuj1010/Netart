import React from "react";
import "./Footer.css";
import fb from "../../assets/fb.png";
import call from "../../assets/call.png";
import web from "../../assets/web.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item">
        <img src={call} alt="" />
        Toll free 1800 200 1234
      </div>
      <div className="footer-item">
        <img src={fb} alt="" />
        www.facebook.com/cripumps
      </div>
      <div className="footer-item">
        <img src={web} alt="" />
        www.crigroups.com
      </div>
    </div>
  );
};

export default Footer;
