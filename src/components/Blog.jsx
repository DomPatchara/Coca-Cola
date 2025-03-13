import React from 'react'
import { BlogsData } from '../../assets/assets'
import { div } from 'framer-motion/client'

const Blog = () => {
  return (
        <div className='container py-14 bg-gray-50'>
            <div>
                <h1 className='text-3xl font-bold text-center pb-8'>Blogs</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    BlogsData.map((blog) => (
                        <div 
                            key={blog.id} 
                            className='p-3 md:p-5 rounded-3xl flex flex-col 
                                        justify-center items-center gap-6 max-w-[300px] mx-auto shadow-lg
                                        bg-white hover:-translate-y-3 duration-300'
                            >
                            <div>
                                <img src={blog.image} className='rounded-2xl'/>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-semibold text-xl line-clamp-2'>{blog.title}</h1>
                                <p className='line-clamp-2'>{blog.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

  )
}

export default Blog