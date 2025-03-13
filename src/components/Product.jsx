import React from 'react'
import { HeroData } from '../../assets/assets'
import { motion } from 'framer-motion'
import { fadeUp } from '../animation'

const Product = () => {
  return (
    <div className='bg-gray-100 py-8'>
        <div className='container py-14'>
            <h1 className='text-3xl font-bold text-center pb-10'>Our Products</h1>
            {/* card section */}
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    HeroData.map((product)=>(
                        <motion.div
                            variants={fadeUp(product.delay)}
                            initial="hidden"
                            whileInView="show" 
                            key={product.id} 
                            className='flex flex-col items-center justify-center mx-auto p-5 shadow-lg bg-white rounded-3xl max-w-[300px]'>
                            <img 
                                src={product.image} 
                                className='w-[100px] mb-4 hover:rotate-12 hover:scale-110 duration-300' />

                            <div className='text-center'>
                                <h1 className='text-2xl font-bold font-handwriting mb-2'>
                                    {product.title}
                                </h1>
                                <p className='text-sm text-gray-600'>
                                    {product.subtitle.substring(0, 80)}
                                </p>
                                <button className='border-2 px-4 py-2 rounded-xl border-amber-600 mt-5 text-amber-600 hover:bg-amber-600 hover:text-white duration-200'>
                                    Buy Now
                                </button>
                            </div>
                        </motion.div>
                        
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Product