import React from 'react'
import Banner from './Banner'

import Recommended from './Recommended'

import SameBanner from './SameBanner'


import Banner3 from './Banner3'
import Banner4 from './Banner4'
import CategoryPage from './CategoryFilter'


const Home = () => {
  return (
    <>
      <Banner/>
     
     <Banner3/>
      <Recommended/>
      <SameBanner/>
      <CategoryPage/>
      <Banner4/>
     
    </>
  )
}

export default Home
