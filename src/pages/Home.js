import React, {useState} from "react";
// import image
import WomanImg from "../img/home/woman.png";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";


const Home = () => {
  return (
    <motion.section
      className={`section`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="container mx-auto">
        {/* text and image wrapper */}
        <div className="flex flex-col justify-center">
          {/* text */}
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex justify-center flex-col items-center lg:items-start">
            <h1 className="h1 dark:text-white">
              Photograph <br /> & film maker
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 ">
              Los Angeles, USA
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              Hire me
            </Link>
          </div>

          {/* Image */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div
              className="relative lg:-right-36 overflow-hidden"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}
                src={WomanImg}
                alt="woman-image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
    
  );
};

export default Home;
