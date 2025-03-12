import React from 'react'
import { useState } from 'react'
import { HeroData } from '../assets/assets'
import { FaWhatsapp } from "react-icons/fa"
import Navbar from './Navbar'
import { motion, AnimatePresence, easeInOut} from 'framer-motion'

const SlideRight = (delay) => {
    return {
        hidden: {
            x: 100,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut
            }
        },
        exit: { // for fade out
            opacity: 0,
            transition: {
                duration: 0.2,
                ease: easeInOut
            }
        }
    };
}


const Hero = () => {
    const [activeData, setActiveData] = useState(HeroData[0])

    const handelActiveData = (data) => {
        setActiveData(data);
    }

  return (
    <div>
        <motion.div
            initial={{ backgroundColor: activeData.bgColor }}
            animate={{ backgroundColor: activeData.bgColor }}
            transition={{ duration: 0.8 }}
        >
            {/**Navbar component */}
            <Navbar/>

            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px] pb-12">

                {/**------------------- Left Side----------------------- */}

                {/** Data Info */}
                <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] text-white order-2 md:order-1'>
                    <div className='space-y-5 text-center md:text-left'>
                        <AnimatePresence mode='wait'>
                            <motion.h1   
                                key={activeData.id}
                                variants={SlideRight(0.2)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className='text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow'
                            >
                                {activeData.title}
                            </motion.h1>
                        </AnimatePresence>

                        <AnimatePresence mode='wait'>
                            <motion.p 
                                key={activeData.id}
                                variants={SlideRight(0.4)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className='text-sm leading-loose text-white/80'
                            >
                                {activeData.subtitle}
                            </motion.p>
                        </AnimatePresence>

                        <AnimatePresence mode='wait'>
                            <motion.button 
                                key={activeData.id}
                                variants={SlideRight(0.6)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                style={{ color: activeData.bgColor}}
                                className='px-4 py-2 bg-white inline-block rounded-sm font-normal cursor-pointer hover:bg-gray-200'
                            >
                                Order Now
                            </motion.button>
                        </AnimatePresence>

                        {/**list seprator */}
                        <motion.div 
                            initial={{ opacity:0 }}
                            animate={{ opacity:1 }}
                            transition={{ duration:0.5, delay:0.2, ease:"easeInOut" }}
                            className='flex items-center justify-center gap-4 md:mt-24 mb-10'
                        >
                            <div className='w-20 h-[1px] bg-white'></div>
                            <p className='text-center'>TO RECOMENDATION</p>
                            <div className='w-20 h-[1px] bg-white'></div>
                        </motion.div>

                        {/** image switcher */}
                        <motion.div 
                            initial={{ opacity:0 }}
                            animate={{ opacity:1 }}
                            transition={{ duration:0.5, delay:0.2, ease:"easeInOut" }}
                            className='grid grid-cols-3 gap-10'>
                            {
                                HeroData.map((data, index)=> (
                                    <div onClick={() => handelActiveData(data)} key={index} className='cursor-pointer space-y-3 hover:scale-105 transition-all duration-200'>
                                        <div className='flex justify-center'>
                                            <img 
                                                src={data.image} 
                                                className={`w-[80px] img-shadow ${
                                                    activeData.image === data.image 
                                                    ? 'opacity-100 scale-110'
                                                    : 'opacity-50'
                                                }`}
                                            />
                                        </div>
                                        <div className='text-center mt-6 space-y-1'>
                                            <p className='text-base line-through opacity-50'>{data.price}</p>
                                            <p className='text-xl font-bold'>{data.price}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </motion.div>
                    </div>

                </div>
                {/**----------------------- Right Side -----------------------------  */}
                {/** Hero Image */}
                <div className='flex flex-col justify-center items-center relative order-1 md:order-2'>
                    <AnimatePresence mode='wait'>
                        <motion.img
                            key={activeData.id}
                            initial={{ opacity:0, x:100 }}
                            animate={{ opacity:1, x:0 }}
                            transition={{ duration: 0.4, delay: 0, ease: "easeInOut"}}
                            exit={{
                                opacity:0,
                                x: -100,
                                transition: {
                                    duration: 0.4
                                }
                            }} 
                            src={activeData.image} 
                            className='w-[150px] sm:w-[200px] md:[250px] xl:w-[350px] img-shadow relative z-10 md:ml-10' 
                        />
                    </AnimatePresence>

                    <AnimatePresence mode='wait'>
                        <motion.div 
                            initial={{ opacity:0 }}
                            animate={{ opacity:1 }}
                            transition={{ duration:0.4, delay:0.0, ease:"easeInOut" }}
                            className='text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'
                        >
                            {activeData.modal}
                        </motion.div>
                    </AnimatePresence>
                </div>
                {/** Whatsap icon */}
                <div className='text-3xl text-white fixed bottom-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference'>
                    <a href="#">
                        <FaWhatsapp/>
                    </a>
                </div>
            </div>
        </motion.div>

    </div>
  )
}

export default Hero