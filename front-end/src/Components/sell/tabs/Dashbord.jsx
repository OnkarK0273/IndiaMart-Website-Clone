import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBulbs, getMachins, getPlywoods } from '../../../redux/sell/sell.action'
import {
  Box, Center, Grid, Heading, Text,
} from "@chakra-ui/react";
export default function Dashbord() {
  const {plyWoods,bulbs,machins} = useSelector((store)=>store.sellReducer)
  const {token} = useSelector((store)=>store.authReducer)
  const dispatch = useDispatch()

  // console.log("plyWoods",plyWoods)
  // console.log('bulbs',bulbs)
  // console.log('machins',machins)

  useEffect(()=>{

    const headers = {     
      'Content-Type': 'application/json',
      token:token // replace token with your actual token value // replace token with your actual token value
    }

    dispatch(getBulbs(headers))
    dispatch(getPlywoods(headers))
    dispatch(getMachins(headers))

  },[])

  return (
    <Box minH='100vh' pt={{ base: "80px", md: "20px" }}  display={'flex'} justifyContent={'center'} alignItems={'center'} >

            <Grid templateColumns='repeat(2, 1fr)' gap={{ base: 30, md: 60 }}>

              <Box>
                <Heading color={'blue.500'} size='4xl' >{plyWoods?.length}</Heading>
                <Heading>PlyWoods</Heading>
              </Box>
              <Box>
                <Heading color={'blue.400'} size='4xl'>{machins?.length}</Heading>
                <Heading>Machins</Heading>
              </Box>
              <Box>
                <Heading color={'blue.300'} size='4xl'>{bulbs?.length}</Heading>
                <Heading>Bulbs</Heading>
              </Box>
              <Box>
                <Heading color={'blue.200'} size='4xl'>{plyWoods?.length+machins?.length+bulbs?.length}</Heading>
                <Heading>Total</Heading>
              </Box>

            </Grid>


    </Box>
  )
}
