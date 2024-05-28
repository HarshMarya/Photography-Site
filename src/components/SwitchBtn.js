// import { forwardRef, useState } from "react"
import { BsBrightnessHighFill } from "react-icons/bs";
import { MdBrightness2 } from "react-icons/md";




// const Switch = forwardRef((props, forwardRef) => (
    
//     <label className="cursor-pointer">
//         <input type="checkbox" className="hidden" ref={forwardRef} {...props} />
//         <div className={`w-14 p-1 rounded-full ${props.checked ? "bg-slate-100" : "bg-gray-800"}`}>
//             <div className={`w-fit p-0.5 shadow-sm rounded-full transition-all duration-300 text-white ${props.checked ? "text-gray-800 translate-x-6" : "text-amber-400 -rotate-180"}`}>
//                 {props.checked ? <MdBrightness2 size={20} /> : <BsBrightnessHighFill size={20} />}
//             </div>
//         </div>
//     </label>
// ))

// export default Switch

// import React, {useState} from 'react'


// function SwitchBtn() {
//     const [darkMode, setDarkMode] = useState(false)
//   return (
//     <>
//     <div className="flex cursor-pointer transition-all delay-300" onClick={()=> setDarkMode(!darkMode)}>
//     <BsBrightnessHighFill size={50} className="dark:hidden text-amber-500 bg-gray-800 p-2 rounded-full border-[#E9F2F7] border-[2px]"/>
//     <MdBrightness2 size={50}  className="hidden dark:flex p-2 rounded-full border-[#E9F2F7] border-[2px] text-white" />
//     </div>
//     {/* <button className='w-[50px] h-[30px] dark:bg-white bg-black dark:text-black text-white rounded-full' >Click</button> */}
//     </>
//   )
// }

export default SwitchBtn
