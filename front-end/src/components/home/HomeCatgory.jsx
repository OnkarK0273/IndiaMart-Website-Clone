import { Box, Flex, Text,Icon, HStack  } from '@chakra-ui/react'
import React from 'react'
import { GiToolbox ,GiMedicines} from 'react-icons/gi'
import { IoBulbSharp } from 'react-icons/io'
import {  } from 'react-icons/gi'

export default function HomeCatgory() {
  return (
    <Box>
            <Flex>
                <HStack>
                    <Icon   as={''} boxSize={5}  /> 
                    <Text  fontWeight={'bold'}>Machins</Text>
                </HStack>
                <HStack>
                    <Icon   as={''} boxSize={5}  /> 
                    <Text  fontWeight={'bold'}>Bulbs</Text>
                </HStack>
                <HStack>
                    <Icon   as={''} boxSize={5}  /> 
                    <Text  fontWeight={'bold'}>Medicines</Text>
                </HStack>
                <HStack>
                    <Icon   as={''} boxSize={5}  /> 
                    <Text  fontWeight={'bold'}>Plywoods</Text>
                </HStack>
            </Flex>

    </Box>
  )
}
