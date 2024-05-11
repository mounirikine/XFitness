import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";

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
      {/* <header
        classNameName="px-5 md:px-20 py-5 z-[9999999] fixed w-full"
        style={navbarStyle}
      >
        <nav classNameName="flex items-center justify-between">
          <h1 classNameName="w-2/12 text-3xl">
            <span classNameName="primary">X</span>FITNESS
          </h1>
          <ul classNameName="lg:flex items-center hidden ">
            <li classNameName="px-5">
              <Link to="/" classNameName="text-xl">
                Home
              </Link>
            </li>
            <li classNameName="px-5">
              <Link to="/about" classNameName="text-xl">
                About
              </Link>
            </li>
            <li classNameName="px-5">
              <Link to="/services" classNameName="text-xl">
                Services
              </Link>
            </li>
            <li classNameName="px-5">
              <Link to="/contact" classNameName="text-xl">
                Contact
              </Link>
            </li>
            <li classNameName="px-5">
              <Link to="/pricing" classNameName="text-xl">
                Pricing
              </Link>
            </li>
            <li classNameName="px-5">
              <Link
                to="/get-started"
                classNameName="px-10 py-2 text-xl bg-[#d5fb00] hover:bg-[#d0ea3f] hover:scale-105 transition-all text-black"
              >
                GET STARTED
              </Link>
            </li>
          </ul>
        </nav>
      </header> */}


<header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-4 fixed"       style={navbarStyle}>
  <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto" aria-label="Global">
    <div className="md:col-span-3">
      <a className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../templates/creative-agency/index.html" aria-label="Preline">
      <h1 className="w-2/12 text-3xl">
            <span className="primary">X</span>FITNESS
          </h1>
      </a>
    </div>


    <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
      <button type="button" className="py-3 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white">
        Sign in
      </button>
      <button type="button" className="py-3 px-5 hidden lg:inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200  disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700   bg-lime-400 text-black hover:bg-lime-500 ">
        Sign up
      </button>
      

      <div className="md:hidden">
      <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className=" drawer-button bg-lime-400 text-black hover:bg-lime-500 btn "><RiMenu3Line /> </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-black  text-black text-2xl  gap-2 items-center justify-center uppercase">
      {/* Sidebar content here */}
      <div>
          <a className="relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white" href="#" aria-current="page">Home</a>
        </div>
        <div>
          <a className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">Services</a>
        </div>
        <div>
          <a className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">About</a>
        </div>
        <div>
          <a className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">Careers</a>
        </div>
        <div>
          <a className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">Blog</a>
        </div>
      
    </ul>
  </div>
</div>
      </div>
    </div>


    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
        <div>
          <a className="relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 dark:text-white" href="#" aria-current="page">Home</a>
        </div>
        <div>
          <a className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">Services</a>
        </div>
        <div>
          <a className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">About</a>
        </div>
        <div>
          <a className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">Careers</a>
        </div>
        <div>
          <a className="inline-block text-black hover:text-gray-600 dark:text-white dark:hover:text-neutral-300" href="#">Blog</a>
        </div>
      </div>
    </div>

  </nav>
</header>

    
    </>
  );
};

export default Navbar;
