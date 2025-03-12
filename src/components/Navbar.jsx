import React from 'react'
import { assets } from '../assets/assets';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { motion } from 'framer-motion';


const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "#"
    },
    {
        id: 2,
        title: "Category",
        link: "#"
    },
    {
        id: 3,
        title: "Blog",
        link: "#"
    },
    {
        id: 4,
        title: "About",
        link: "#"
    },
    {
        id: 5,
        title: "Contact",
        link: "#"
    }
]

const Navbar = () => {
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
            <div className='md:hidden'>
                <GiHamburgerMenu size={25}/>
            </div>
        </motion.div>
    </div>
  )
}

export default Navbar