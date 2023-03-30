import { Box, Grid, Image } from '@chakra-ui/react'
import React from 'react'

export default function HomeAdv() {
  return (
    <>
    <Grid templateColumns={{base:'repeat(2, 1fr)',sm:'repeat(3, 1fr)',md:'repeat(5, 1fr)'}} p='10px'  gap={3}>
        <Box>
            <Image src='/images/ad1.png'objectFit={'cover'}  />
        </Box>
        <Box>
        <Image src='/images/ad2.png' objectFit={'cover'} />
        </Box>
        <Box>
        <Image src='/images/ad3.png' objectFit={'cover'} />
        </Box>
        <Box>
        <Image src='/images/ad4.png' objectFit={'cover'} />
        </Box>
        <Box>
        <Image src='/images/ad5.png' objectFit={'cover'} />
        </Box>

    </Grid>
    </>
  )
}
