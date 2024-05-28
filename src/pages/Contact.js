import React from 'react';
// import images
import WomanImg from '../img/contact/woman.png'
// import motion
import { motion } from 'framer-motion';

const Contact = () => {
  return <motion.section className='section '
  initial={{ opacity: 0, y: '100%' }}
  animate={{ opacity: 1 ,y: 0}}
  exit={{ opacity: 0, y: '100%'}}
  transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
      {/* bg */}
      <motion.div className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1 ,y: 0}}
          exit={{ opacity: 0, y: '100%'}}
          transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}>

      </motion.div>
      {/* text and form */}
      <div className='lg:flex-1 lg:pt-32 px-4'>
        <h1 className='h1'>Contact Me</h1>
      <p className='mb-12'>I would love to get suggestions from you.</p>
      {/* form */}
      <form className='flex flex-col gap-y-4'>
        <div className='flex gap-x-10'>
          <input className='outline-none border-b border-b-primary font-secondary h-[60px] bg-transparent w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your Name'/>
          <input className='outline-none border-b border-b-primary font-secondary h-[60px] bg-transparent w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your Email Address'/>
        </div>
        <input className='outline-none border-b border-b-primary font-secondary h-[60px] bg-transparent w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your Message'/>
        <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send it</button>
      </form>
      </div>
      {/* images */}
      <motion.div className='lg:flex-1'
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1 ,y: 0}}
          exit={{ opacity: 0, y: '100%'}}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}>
        <img src={WomanImg} alt='Woman-image'/>
      </motion.div>
      </div>
    </div>
  </motion.section>;
};

export default Contact;
