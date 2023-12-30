import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Banner from './Components/Banner'
import BannerBottom from './Components/BannerBottom'
import Catagory from './Components/Catagory'
import NewArrivals from './Components/NewArrivals'
import BestSeller from './Components/BestSeller'
import Clock from './Components/Clock'
import SpecialOffer from './Components/SpecialOffer'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Banner></Banner>
      <BannerBottom></BannerBottom>
      <Catagory></Catagory>
      <NewArrivals></NewArrivals>
      <BestSeller></BestSeller>
      <Clock></Clock>
      <SpecialOffer></SpecialOffer>
    </>
  )
}

export default Home