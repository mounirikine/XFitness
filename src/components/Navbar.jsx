import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrollY > 30 ? "black" : "transparent",
    transition: "background-color 0.3s ease",
  };

  return (
    <>
      <header
        className="px-5 md:px-20 py-5 z-[9999999] fixed w-full"
        style={navbarStyle}
      >
        <nav className="flex items-center justify-between">
          <h1 className="w-2/12 text-3xl">
            <span className="primary">X</span>FITNESS
          </h1>
          <ul className="lg:flex items-center hidden ">
            <li className="px-5">
              <Link to="/" className="text-xl">
                Home
              </Link>
            </li>
            <li className="px-5">
              <Link to="/about" className="text-xl">
                About
              </Link>
            </li>
            <li className="px-5">
              <Link to="/services" className="text-xl">
                Services
              </Link>
            </li>
            <li className="px-5">
              <Link to="/contact" className="text-xl">
                Contact
              </Link>
            </li>
            <li className="px-5">
              <Link to="/pricing" className="text-xl">
                Pricing
              </Link>
            </li>
            <li className="px-5">
              <Link
                to="/get-started"
                className="px-10 py-2 text-xl bg-[#d5fb00] hover:bg-[#d0ea3f] hover:scale-105 transition-all text-black"
              >
                GET STARTED
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
