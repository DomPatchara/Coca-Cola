import React from 'react'
import { faqData } from '../../assets/assets'
import { useState } from 'react'

const FAQ = () => {

    const [active, setactive] = useState(null)

    const handleClick = (index) => {
        setactive( active === index ? null : index)
    }
  return (
    <div className='max-w-2xl mt-20 mb-28 py-4 mx-auto'>
        <h1 className='text-3xl font-bold text-center pb-8'>
            Frequently Asked Questions
        </h1>

        {
            faqData.map((item, index)=>(
                <div key={index} className='mb-4 py-4 border-b border-gray-300'>
                    <div
                        className='flex justify-between items-center cursor-pointer py-4'
                        onClick={()=>handleClick(index)}
                    >
                        <h3 className='text-xl font-semibold text-gray-800'>{item.question}</h3>
                        <span>{active === index ? "-": "+"}</span>
                    </div>

                    {active === index &&  <p className='text-gray-600'>{item.answer}</p> }
                </div>

            ))
        }
    </div>
  )
}

export default FAQ