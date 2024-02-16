import React from "react";
import "./NavUnder.css";

export const NavUnder = () => {
  return (
    <nav className="navUnder">
      <div className="logo">
        <img src="https://community.startinfinity.com/uploads/default/original/1X/7f4b99e74e68670e0a9d92156bf84f02173be5c8.png" alt="" />
      </div>  
      <div className="navLinks">
        <a href="#">Pricing</a>
        <a href="#">Templates</a>
        <a href="#">Resources</a>
        <a href="#">Product</a>
        <a href="#">Blog</a>
        <a href="#">Webinar</a>
        <a href="#">Log in</a>
        <a href="#" className="GStarted">
          Get Started
        </a>
      </div>
    </nav>
  );
};
