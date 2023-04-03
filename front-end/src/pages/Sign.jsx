import React, { useEffect, useState } from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Signin } from '../redux/auth/auth.action';
export default function Sign() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstname,setname] = useState('')
  const [lastname,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPass] = useState('')
  const [mobile,setmob] = useState('')
  const dispatch = useDispatch()
  const {error,isSign} = useSelector((store)=>store.authReducer)
  const navigate = useNavigate();
  const toast = useToast()
  // console.log(error,isSign)
  
  const onsubmit = ()=>{
    const payload ={
      username: {
        firstname,
        lastname
      },
      email,
      password,
      age: 0,
      mobile,
      role:"user",
      address: {
        city: "",
        state: "",
        country: "",
        pin: 0,
      },
    }

    dispatch(Signin(payload))

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
    if(isSign){
      toast({
        title: 'Account Created Sucessfully',
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
      navigate('/login')
    }

  },[error,isSign])

  return (
    <>
       <Flex
      minH={'100vh'}
      // align={'center'}
      justify={'center'}
      backgroundImage="url('https://c4.wallpaperflare.com/wallpaper/311/864/40/minimalism-blue-green-gradient-wallpaper-preview.jpg')"
      backgroundSize="cover"
      
      >
      <Stack spacing={3} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading  pb='10px'  color={'whiteAlpha.800'} fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
    
        </Stack>
        <Box
          rounded={'lg'}
          bg={'whiteAlpha.700'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>FirstName</FormLabel>
                  <Input type="text" value={firstname} onChange={(e)=>{setname(e.target.value)}} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>LastName</FormLabel>
                  <Input type="text" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} />
                </FormControl>
              </Box>
            </HStack>
           
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </FormControl>
            <FormControl id="con_password" isRequired>
              <FormLabel>Mob No </FormLabel>
              <InputGroup>
                <Input type={ 'text' } value={mobile}  onChange={(e)=>{setmob(e.target.value)}}/>
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e)=>{setPass(e.target.value)}}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                onClick={onsubmit}           
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
           
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </>
  )
}
