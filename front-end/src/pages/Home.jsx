
import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import HomeBottom from '../Components/home/HomeBottom'
import HomeCatgory from '../Components/home/HomeCatgory'
import HomeSections from '../Components/home/HomeSections'
import HomeTop from '../Components/home/HomeTop'


export default function Home() {
  return (
    <div>
      {/* banner */}
      <Box>
        <HomeTop />
      </Box>
      {/* Catagory nav-bar */}
      <Box>
        <HomeCatgory />
      </Box>
      {/* Product Gridr */}
      <Box>
        <HomeSections />
      </Box>
      {/* Bottom posters - features */}
      <Box>
        <HomeBottom />
      </Box>
    </div>
  );
}
