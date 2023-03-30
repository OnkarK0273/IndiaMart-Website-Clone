import { VStack } from '@chakra-ui/react'
import React from 'react'
import { data } from '../../utils/data'
import HomeGrid from './HomeGrid'

export default function HomeSections() {
  return (
    <>
        <VStack p='10px'>
            {
                data.map((el,i)=>(<HomeGrid key={i} data1={el} />))
            }
        </VStack>
    </>
  )
}
