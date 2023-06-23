import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
         <Navbar />
      <Slider/>
      <FeaturedProducts type="Featured"/>
      <Categories/>
      <FeaturedProducts type="Trending"/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default Home