import React from "react";
import { BsFacebook, BsLinkedin,BsFillEnvelopeFill } from "react-icons/bs";
import './Footer.scss';

const Footer = () => {
  return (
    <div className="bottom-location">
      <footer className="text-center text-white">
        <div className="text-center p-3">
          <span style={{ text: "white" }}>© 2022 Roni Guzovsky</span>
          <div className="icons">
          <BsFacebook />
          <div style={{marginLeft: "10px"}}></div>
          <BsLinkedin />
          <div style={{marginLeft: "10px"}}></div>
          <BsFillEnvelopeFill/>
       
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
