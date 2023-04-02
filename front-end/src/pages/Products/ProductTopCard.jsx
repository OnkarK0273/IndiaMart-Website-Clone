import React from 'react'
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

const ProductTopCard = ({img,title}) => {
  
  return (
    <div>
      <Center py={12}>
      <Box
      cursor={'pointer'}
        role={'group'}
        p={2}
        maxW={'140px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'120px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={150}
            width={232}
            objectFit={'cover'}
            src={img}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'1xl'} fontFamily={'body'} fontWeight={500}>
            {title}
          </Heading>
        </Stack>
      </Box>
    </Center>
    </div>
  )
}

export default ProductTopCard