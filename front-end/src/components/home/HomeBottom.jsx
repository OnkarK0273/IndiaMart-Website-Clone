import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import HomeAdv from './HomeAdv'

export default function HomeBottom() {
  return (
    <Box p='25px' textAlign={'center'} >
        <Heading p='20px' size={{base:"md",md:'lg'}} >Explore related products from Premium Brands</Heading>
        <Box>
            <Image objectFit={'cover'} src='/images/poster1.png' alt='poster1' />
        </Box>
        <Heading p='10px' size={{base:"md",md:'lg'}} >More For You</Heading>
        <Box>
          <HomeAdv/>
        </Box>
        <Box>
            <Flex  flexDirection={{base:"column",md:"row"}} >
              <Box>
                <Image src='/images/poster2.1.png' objectFit={'cover'}  alt='poster2.1' />
              </Box>
              <Box>
              <Image src='/images/poster2.2.png' objectFit={'cover'} alt='poster2.2' />
              </Box>
            </Flex>
        </Box>

    </Box>
  )
}


