import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Banner from './Components/Banner'
import BannerBottom from './Components/BannerBottom'
import Catagory from './Components/Catagory'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Banner></Banner>
      <BannerBottom></BannerBottom>
      <Catagory></Catagory>
    </>
  )
}

export default Home