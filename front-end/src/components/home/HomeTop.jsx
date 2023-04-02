import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import {  useSelector } from 'react-redux';
export default function HomeTop() {
    const {isLogin} = useSelector((store)=>store.authReducer)
    const [name,setName] = useState('')
    const [mob,setMob] =  useState('')
    const [email,setEmail] =  useState('')

    useEffect(()=>{

        const user = JSON.parse(sessionStorage.getItem("user"))
        if(user){
            setName(user.username.firstname + " " + user.username.lastname)
            setEmail(user.email)
            setMob(user.mobile)
        }


    },[isLogin])


  return (
    <Box>
      <Flex
        align={"center"}
        justify={"center"}
        backgroundImage="url('/images/wearhouse.png')"
        backgroundSize="cover"
        minH={"50vh"}
      >
        {
            isLogin?<Flex columnGap={'20px'} p='20px' >
                    <Box bg='whiteAlpha.700'display={{ base: 'none', md: 'flex' }}  >
                        <VStack p='10px' rowGap={'10px'} >
                            <Heading>Tell us what you Need</Heading>
                            <Box>
                                <InputGroup>
                                    <Input
                                    type="text"
                                    _placeholder={{ opacity: 1, color: 'white' }}
                                    placeholder="Enter Product / service"
                                    borderColor={"teal"}
                                    />
                    
                                </InputGroup>
                            </Box>
                            <Button colorScheme={'teal'} >Submit Requirement</Button>
                            <Heading size={'md'} >You may be looking to buy</Heading>
                        </VStack>
                    </Box>
                    <Box  bg='whiteAlpha.700' >
                        <VStack p='10px' rowGap={'10px'} >
                             <Heading>Strengthen Your Profile</Heading>
                             <Text fontWeight={'bold'} >Name : {name}</Text>
                             <Text fontWeight={'bold'}>Mob : +91{mob}</Text>
                             <Text fontWeight={'bold'}>Gmail: {email}</Text>
                             <Box>
                                <InputGroup>
                                    <Input
                                    type="text"
                                    _placeholder={{ opacity: 1, color: 'white' }}
                                    placeholder="Please Enter GST Number"
                                    borderColor={"teal"}
                                    />
                                    <Button colorScheme={"teal"} ml="5px" mr="5px">
                                        Save
                                    </Button>
                                </InputGroup>
                            </Box>
                             
                        </VStack>
                    </Box>
                </Flex>:<Flex  >
                <Box display={{ base: 'none', md: 'flex' }}>
                <Menu>
                    <MenuButton as={Button} bg='whiteAlpha.700' rightIcon={<ChevronDownIcon />}>
                    All India
                    </MenuButton>
                    <MenuList>
                    <MenuItem>Pune</MenuItem>
                    <MenuItem>Kolhapur</MenuItem>
                    <MenuItem>Nashik</MenuItem>
                    <MenuItem>Satara</MenuItem>
                    <MenuItem>Mumbai</MenuItem>
                    </MenuList>
                </Menu>
                </Box>
                <Box>
                <InputGroup>
                    <Input
                    type="text"
                    _placeholder={{ opacity: 1, color: 'white' }}
                    placeholder="Enter Product / service"
                    borderColor={"teal"}
                    />
                    <Button colorScheme={"teal"} ml="5px" mr="5px">
                    <Search2Icon />
                    </Button>
                </InputGroup>
                </Box>
            </Flex>
        }
       
      </Flex>
    </Box>
  );
}
