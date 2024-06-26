import React, { useState } from "react";
//import icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    trasnsition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="xl:hidden text-primary">
      {/* nav open button */}
      <div onClick={()=>setOpenMenu(true)} className="text-3xl cursor-pointer">
        <CgMenuRight />
      </div>
      {/* Menu */}
      <motion.div
        variants={menuVariants}
        intital='hidden'
        animate={openMenu ? "show" : "hidden"}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        {/* nav close button*/}
        <div onClick={()=>setOpenMenu(false)} className="text-4xl absolute cursor-pointer z-30 left-4 top-14 text-primary max-w-xs">
          <IoMdClose />
        </div>

        <ul className="flex flex-col justify-center items-center h-full gap-y-10 font-primary text-primary font-bold text-3xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
