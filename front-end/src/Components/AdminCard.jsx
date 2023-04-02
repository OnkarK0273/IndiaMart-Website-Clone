
import React, { useState } from 'react'


import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    HStack,
  } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteAdminData } from '../redux/Admin/admin.action';
  
  export default function AdminCard({admin,open,getUser}) {
      const navigate = useNavigate()
    const {_id,username,address,email,age,password,role,} = admin
    const {firstname,lastname}=username

    const [user,setUsername] =useState(username)
  
  const [addres,setAddress] =useState(address)
  const [Admin,setAdmin] =useState({
    username,address,email,age,password,role
})

    // console.log("product",admin)
    const dispatch = useDispatch()

    return (
        <>

        
      <Center py={6}>
        <Box
          maxW={'350px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            name={`${firstname} ${lastname}`}
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
          {`${firstname} ${lastname}`}
          </Heading>
  
 
          <Text>
            {email}
          </Text>


          
  
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                  bg: 'gray.200',
                }}
                onClick={()=>{getUser(admin);open()}}
                >
              Edit
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                    bg: 'blue.500',
                }}
                _focus={{
                    bg: 'blue.500',
                }}
                onClick={()=>{dispatch(deleteAdminData(_id))}}
                >
              Delete
            </Button>
          </Stack>
        </Box>
      </Center>
     </>
    );
  }