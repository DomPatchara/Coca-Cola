import React from 'react'
import Hero from './components/Hero'
import Product from './components/Product'
import Banner from './components/Banner'
import BannerText from './components/BannerText'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-hidden'>
      <Hero/>
      <Product/>
      <Banner/>
      <BannerText/>
      <Blog/>
      <FAQ/>
      <Footer/>
    </main>
  )
}

export default App