import React from 'react'
import { assets } from '../../assets/assets';
import { NavbarMenu } from '../../assets/assets';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";


const Navbar = () => {

    const [visible, setVisible] = useState(false);
  return (
    <div className='text-white py-8'>
        <motion.div 
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ duration:1, delay:0.5}}
            className='container flex justify-between items-center'>
            {/** logo section */}
            <div>
                <img src={assets.logo} className='max-w-[100px] invert'/>
            </div>

            {/**Menu section */}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-3 relative z-40'>
                    {NavbarMenu.map((item)=>(
                        <li key={item.id}>
                            <a 
                                href={item.link} 
                                className='inline-block text-base font-semibold py-2 px-3 uppercase'
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                    <button className='text-xl ml-5'>
                        <FaUser/>
                    </button>
                </ul>
            </div>


            {/** Hamburger Icon */}
            <div className='md:hidden cursor-pointer z-40' onClick={() => setVisible(true)}>
                <GiHamburgerMenu size={25} />
            </div>

            {/**Sidebar menu for small screen*/}
            <div className={`${visible ? 'w-[280px]' : 'w-0'} inset-shadow-[-50px_0px_300px] bg-amber-700 fixed top-0 right-0 bottom-0 z-100 overflow-hidden transition-all duration-300 md:hidden`}>
                <div className='flex flex-col text-2xl mt-50 space-y-5 p-5'>
                    <div className='flex gap-1 items-center cursor-pointer hover:scale-110 hover:translate-x-3' onClick={()=>setVisible(false)}>
                        <IoIosArrowBack/>
                        <p > Back </p>
                    </div>
                    <ul className='space-y-4'>
                        <li className='hover:scale-110 hover:translate-x-3'><a href="#" onClick={()=>setVisible(false)} className=''>Home</a></li>
                        <li className='hover:scale-110 hover:translate-x-3'><a href="#" onClick={()=>setVisible(false)}>Category</a></li>
                        <li className='hover:scale-110 hover:translate-x-3'><a href="#" onClick={()=>setVisible(false)}>Blog</a></li>
                        <li className='hover:scale-110 hover:translate-x-3'><a href="#" onClick={()=>setVisible(false)}>About</a></li>
                        <li className='hover:scale-110 hover:translate-x-3'><a href="#" onClick={()=>setVisible(false)}>Contact</a></li>
                    </ul>
                </div>
            </div>

        </motion.div>
    </div>
  )
}

export default Navbar