import { Box, Flex, Text,Icon, HStack, Button, Stack  } from '@chakra-ui/react'
import React from 'react'
import { GiToolbox ,GiMedicines,GiWoodBeam} from 'react-icons/gi'
import { FaLightbulb } from 'react-icons/fa'
import {  } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

export default function HomeCatgory() {

    const navigate=useNavigate()

const handlePly=(el)=>{
    navigate(el)
}

  return (
    <Box>
            <Flex justifyContent={'space-around'} p='10px' >
                <Stack as="Button"  direction={{base:"column",md:"row"}} alignItems='center' >
                    <Icon color={'blue.300'}  as={GiToolbox} boxSize={{base:5,md:10}}  /> 
                    <Text  fontWeight={'bold'}>Machines</Text>
                </Stack>
                <Stack as="Button" direction={{base:"column",md:"row"}} alignItems='center' >
                    <Icon color={'blue.300'}  as={FaLightbulb} boxSize={{base:5,md:10}}  /> 
                    <Text  fontWeight={'bold'}>Bulbs</Text>
                </Stack>
                <Stack as="Button" direction={{base:"column",md:"row"}} alignItems='center'>
                    <Icon color={'blue.300'}  as={GiMedicines} boxSize={{base:5,md:10}} /> 
                    <Text  fontWeight={'bold'}>Medicines</Text>
                </Stack>
                <Stack as="Button" direction={{base:"column",md:"row"}} onClick={()=>{handlePly('/plywood')}} alignItems='center' >
                    <Icon color={'blue.300'}  as={GiWoodBeam} boxSize={{base:5,md:10}} /> 
                    <Text  fontWeight={'bold'}>Plywoods</Text>
                </Stack>
                
            </Flex>

    </Box>
  )
}
