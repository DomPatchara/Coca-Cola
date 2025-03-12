import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Product from './components/Product'

const App = () => {
  return (
    <main className='overflow-hidden'>
      <Hero/>
      <Product/>
    </main>
  )
}

export default App