import React, { useState } from 'react'
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
  Select,
  Text,
  useColorModeValue,
  Link,
  useToast
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
export default function Sign() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [name,setname] = useState('')
  const [age,setage] = useState(0)
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [pass2,setPass2] = useState('')
 
  const navigate = useNavigate();
  const toast = useToast()

  const flag = ((pass.length>0 && pass2.length>0 ) && (pass === pass2))
  const onsubmit = ()=>{}

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
                  <FormLabel>Name</FormLabel>
                  <Input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Age</FormLabel>
                  <Input type="number" value={age} onChange={(e)=>{setage(e.target.value)}} />
                </FormControl>
              </Box>
            </HStack>
           
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
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
            <FormControl id="con_password" isRequired>
              <FormLabel>confirm password </FormLabel>
              <InputGroup>
                <Input type={showPassword1 ? 'text' : 'password'} value={pass2}  onChange={(e)=>{setPass2(e.target.value)}}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword1((showPassword1) => !showPassword1)
                    }>
                    {showPassword1 ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={onsubmit}
                isDisabled={!flag}
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
