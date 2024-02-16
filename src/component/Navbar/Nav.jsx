import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };  
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <b>Important: Grab our <span className="underline">UNLIMITED WHITE LABEL</span> plan before it expires!</b>

      <a href="#">1D</a>
      <a href="#">15h</a>
      <a href="#">03m</a>
      <a href="#">45s</a>
    </nav>
  );
};

export default Nav;
