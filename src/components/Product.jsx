import React from 'react'
import { HeroData } from '../../assets/assets'

const Product = () => {
  return (
    <div className='bg-gray-100 py-8'>
        <div className='container py-14'>
            <h1 className='text-3xl font-bold text-center pb-10'>Our Products</h1>
            {/* card section */}
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    HeroData.map((product, index)=>(
                        <div key={index} className='flex flex-col items-center justify-center p-5 bg-white rounded-3xl'>
                            <img 
                                src={product.image} 
                                className='w-[100px] mb-4 hover:rotate-12 hover:scale-110 duration-300' />

                            <div>
                                <h1 className='text-center text-2xl font-bold font-handwriting mb-2'>
                                    {product.title}
                                </h1>
                                <p className='text-center text-sm text-gray-600'>
                                    {product.subtitle.substring(0, 80)}
                                </p>
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Product