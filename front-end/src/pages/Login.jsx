import React, { useEffect, useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useToast,
   
  } from '@chakra-ui/react';
  import {Link as Navlink, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Log } from '../redux/auth/auth.action';
export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPass] = useState('')
    const toast = useToast()
    const navigate = useNavigate();
    const {error,isLogin} = useSelector((store)=>store.authReducer)
    const dispatch = useDispatch()


    const onsubmit = ()=>{
      const payload ={
        email,
        password
      }
  
      dispatch(Log(payload))
    }
    useEffect(()=>{
      if(error){
        toast({
          title: error,
          status: 'error',
          duration: 1000,
          isClosable: true,
        })
      }
      if(isLogin){
        toast({
          title: 'Login Sucessfull.',
          status: 'success',
          duration: 1000,
          isClosable: true,
        })
        navigate('/')
      }
  
    },[error,isLogin])


  return (
    <div>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          backgroundImage="url('https://c4.wallpaperflare.com/wallpaper/311/864/40/minimalism-blue-green-gradient-wallpaper-preview.jpg')"
          backgroundSize="cover"
      >
      <Stack spacing={3} mx={'auto'} maxW={'lg'} py={18} px={6} >
        <Stack align={'center'}>
          <Heading  p='10px' color={'whiteAlpha.800'} fontSize={'4xl'}>Login</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={'whiteAlpha.700'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e)=>{setPass(e.target.value)}} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                >
                <Text>Create New Account</Text>
                <Navlink to={'/sign'} color={'blue.400'}>SignUp</Navlink>
              </Stack>
              <Button
              onClick={onsubmit}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </div>
  )
}
