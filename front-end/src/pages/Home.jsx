import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import HomeBottom from '../components/home/HomeBottom'
import HomeCatgory from '../components/home/HomeCatgory'
import HomeSections from '../components/home/HomeSections'
import HomeTop from '../components/home/HomeTop'

export default function Home() {
  
  return (
    <div>
      {/* banner */}
      <Box>
        <HomeTop/>
      </Box>
      {/* Catagory nav-bar */}
      <Box>
        <HomeCatgory/>
      </Box>
      {/* Product Gridr */}
      <Box>
        <HomeSections/>
      </Box>
      {/* Bottom posters - features */}
      <Box>
        <HomeBottom/>
      </Box>

    </div>
  )
}
