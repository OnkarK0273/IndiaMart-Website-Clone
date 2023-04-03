import React from 'react'
import { Box, VStack, Image } from '@chakra-ui/react'
export default function Setting() {
  return (
    <Box minH='100vh' pt={{ base: "80px", md: "20px" }}>
        <VStack p='20px'>
          <Box>
            <Image src='/images/ade1.png' objectFit={'cover'} />
          </Box>
          <Box>
           <Image src='/images/ade2.png' objectFit={'cover'} />
          </Box>
         <Box>
            <Image src='/images/ade3.png' objectFit={'cover'} />
          </Box>
          <Box>
            <Image src='/images/ade4.png' objectFit={'cover'} />
          </Box>
        </VStack>
    </Box>
  )
}