import React from "react";
// import Acc
import Socials from "./Socials";
import Logo from "../img/header/logo.svg";
import MobileNav from "./MobileNav";
// import link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to="/" className="max-w-[200px]">
          <img src={Logo} alt="logo" />
        </Link>
        {/* Navbar Section */}
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <Link to="/" className="text-[#696c6b] hover:text-primary transition">
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#696c6b] hover:text-primary transition"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-[#696c6b] hover:text-primary transition"
          >
            Contact Us
          </Link>
          <Link
            to="/portfolio"
            className="text-[#696c6b] hover:text-primary transition"
          >
            Portfolio
          </Link>
        </nav>
      </div>
      {/* Social Section */}
      <Socials />
      {/* Mobile */}
      <MobileNav />
    </header>
  );
};

export default Header;
