import React from 'react'
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'
import { fadeUp } from '../animation'

const Banner = () => {
  return (
    <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12' >
            {/* Banner Image Section */}
            <div className='relative'>
                <motion.img 
                    initial={{ opacity:0, x: -100}}
                    whileInView={{ opacity:1, x:0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    src={assets.juice} className='w-[300px] md:w-[400px] mx-auto relative z-10'  />
                <motion.img 
                    initial={{ opacity:0, x: -100, rotate: -180, scale: 0}}
                    whileInView={{ opacity:1, x:0, rotate: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    src={assets.splash} className='absolute bottom-0 z-0 '/>
            </div>
            {/** Banner Text Section */}

            <div className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                    <motion.h1 
                        variants={fadeUp(0.7)}
                        initial="hidden"
                        whileInView="show"
                        className='text-3xl lg:text-4xl font-semibold'
                    >
                        Refresh Your World with Fanta
                    </motion.h1>
                    <motion.p 
                        variants={fadeUp(0.9)}
                        initial="hidden"
                        whileInView="show"
                        className='text-gray-500'
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Non, officia sed. Sint iste, maxime eveniet hic modi autem
                        nisi libero fugit voluptatem quaerat, dolorem, molestiae 
                        vero recusandae optio excepturi ipsam!
                        Non, officia sed. Sint iste, maxime eveniet hic modi autem
                        nisi libero fugit voluptatem quaerat, dolorem, molestiae 
                        vero recusandae optio excepturi ipsam.               
                    </motion.p>
                    <motion.button 
                        variants={fadeUp(1.1)}
                        initial="hidden"
                        whileInView="show"
                        className='px-6 py-2 border-2 border-amber-600 rounded-2xl hover:bg-amber-600 text-amber-600 hover:text-white'
                    >
                        Shop Now
                    </motion.button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner