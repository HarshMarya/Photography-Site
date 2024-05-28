import React from "react";
// import images
import WomanImage from "../img/about/woman.png";
// import Link
import { Link } from "react-router-dom";
// import framer-motion
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section className="section"
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1 ,y: 0}}
    exit={{ opacity: 0, y: '100%'}}
    transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}>
      <div className="container mx-auto h-full relative">
        {/* text and image wrapper */}
        <div className="flex flex-col lg:flex-row h-full justify-center gap-x-24 text-center lg:text-left lg:pt-28">
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}
              src={WomanImage}
              alt="woman-image"
            />
          </div>
          {/* Text */}
          <motion.div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
              initial={{ opacity: 0, y: '-80%' }}
              animate={{ opacity: 1 ,y: 0}}
              exit={{ opacity: 0, y: '-80%'}}>
            <h1 className="h1">About Me</h1>
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

            <Link to={"/portfolio"} className="btn">
              View My work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
