import { Box, Flex, Text,Icon, HStack, Button, Stack  } from '@chakra-ui/react'
import React from 'react'
import { GiToolbox ,GiMedicines,GiWoodBeam} from 'react-icons/gi'
import { FaLightbulb } from 'react-icons/fa'
import {  } from 'react-icons/gi'

export default function HomeCatgory() {
  return (
    <Box>
            <Flex justifyContent={'space-around'} p='10px' >
                <Stack as="Button"  direction={{base:"column",md:"row"}} alignItems='center' >
                    <Icon color={'blue.300'}  as={GiToolbox} boxSize={{base:5,md:10}}  /> 
                    <Text  fontWeight={'bold'}>Machins</Text>
                </Stack>
                <Stack as="Button" direction={{base:"column",md:"row"}} alignItems='center' >
                    <Icon color={'blue.300'}  as={FaLightbulb} boxSize={{base:5,md:10}}  /> 
                    <Text  fontWeight={'bold'}>Bulbs</Text>
                </Stack>
                <Stack as="Button" direction={{base:"column",md:"row"}} alignItems='center'>
                    <Icon color={'blue.300'}  as={GiMedicines} boxSize={{base:5,md:10}} /> 
                    <Text  fontWeight={'bold'}>Medicines</Text>
                </Stack>
                <Stack as="Button" direction={{base:"column",md:"row"}} alignItems='center'>
                    <Icon color={'blue.300'}  as={GiWoodBeam} boxSize={{base:5,md:10}} /> 
                    <Text  fontWeight={'bold'}>Plywoods</Text>
                </Stack>
                
            </Flex>

    </Box>
  )
}
