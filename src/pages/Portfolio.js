import React from "react";
// import images
import Img1 from "../img/portfolio/1.png";
import Img2 from "../img/portfolio/2.png";
import Img3 from "../img/portfolio/3.png";
import Img4 from "../img/portfolio/4.png";
// import link
import { Link } from "react-router-dom";
// import framer-motion
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.section className=" section"
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1 ,y: 0}}
    exit={{ opacity: 0, y: '100%'}}
    transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}>
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <motion.div className="flex flex-col lg:items-start"
              initial={{ opacity: 0, y: '-80%' }}
              animate={{ opacity: 1 ,y: 0}}
              exit={{ opacity: 0, y: '-80%'}}
              transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}>
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              corrupti blanditiis tempora <b>maxime neque atque,</b> vel
              eligendi at corporis recusandae!
              <br />
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                corrupti blanditiis tempora maxime neque atque, vel eligendi at
                <b>corporis recusandae!</b>
              </p>
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              hire me
            </Link>
          </motion.div>
          {/* images */}
          <div className="grid grid-cols-2 lg:gap-2">
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img src={Img1} alt="image-1" className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"/>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img src={Img2} alt="image-1" className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"/>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img src={Img3} alt="image-1" className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"/>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img src={Img4} alt="image-1" className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"/>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
