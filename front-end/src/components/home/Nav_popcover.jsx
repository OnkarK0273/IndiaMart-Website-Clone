import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody, 
    PopoverArrow,
    Text,
    Box,
  } from '@chakra-ui/react'

export default function NavPopcover() {
  return (
    <>
    <Popover trigger={'hover'}  >
        <PopoverTrigger>
            <Text  fontWeight={'bold'} _hover={{ color:'teal' }} >Help</Text>
        </PopoverTrigger>
        <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Find answers to your queries</PopoverHeader>
            <PopoverBody textAlign={'left'} >  
                <Box>for Buying</Box>
                <Box>Share Your Feedback</Box>
                <Box>Raise a Complaint</Box>
                <Box>Email: customercare@martmate.com</Box>
                <Box>Call us : 85745666</Box>
                <Box>Chat With us</Box>
            </PopoverBody>
        </PopoverContent>
    </Popover>               
    </>
  )
}
