import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import HomeCatgory from '../components/home/HomeCatgory'
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
    </div>
  )
}
