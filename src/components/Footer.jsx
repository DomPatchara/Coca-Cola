import React from 'react'
import { assets } from '../../assets/assets'
import { FaMapLocation } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaTelegram, FaGoogle } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-amber-600 py-8 text-white pt-12 pb-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/** company details section  */}
                <motion.div 
                    initial={{ opacity:0, y: 100}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2
                    }}
                    className='space-y-6'
                >
                    <img src={assets.logo} className='max-w-[100px] invert' />
                    <div>
                        <p className='flex items-center gap-2'>
                            +1 (123) 456-789
                        </p>
                        <p className='flex items-center gap-2 mt-2'> 
                            {" "}
                            <FaMapLocation/> Nadou Fresher
                        </p>
                    </div>
                </motion.div>
                {/**Footer Links section */}
                <motion.div 
                    initial={{ opacity:0, y: 100}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.4
                    }}
                    className='space-y-6'
                >
                    <h1 className='text-3xl font-bold'>Links</h1>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/**Social Links section */}
                <motion.div 
                    initial={{ opacity:0, y: 100}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.6
                    }}
                    className='space-y-6 text-center'
                >
                    <h1 className='text-3xl font-bold'>Follow us</h1>
                    <div className='flex items-center gap-5 text-3xl justify-center '>
                        <FaFacebook className='hover:scale-110 duration-200 cursor-pointer'/>
                        <FaInstagram className='hover:scale-110 duration-200 cursor-pointer'/>
                        <FaTelegram className='hover:scale-110 duration-200 cursor-pointer'/>
                        <FaGoogle className='hover:scale-110 duration-200 cursor-pointer'/>
                    </div>

                        {/** Payment Method */}
                    <div className='space-y-2'>
                        <p>Payment method</p>
                        <img src={assets.credit_cards} />
        
                    </div>

                </motion.div>
            </div>
                
            {/**copylight section */}
            <p className='text-center mt-8 border-t-2 border-white/40 pt-8'>
                Copyright &copy; 2025. All Roght Reserved
            </p>

         </div>
    </footer>
    
  )
}

export default Footer