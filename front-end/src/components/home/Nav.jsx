
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  Text,
  Icon,
  Image,
  VStack,
  InputGroup,
  Heading,

} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { MdSell,MdOutlineMessage,MdHome } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { HamburgerIcon, CloseIcon, ChevronDownIcon, Search2Icon } from '@chakra-ui/icons';
import {Link as Navlink} from 'react-router-dom'
import React, { useState } from 'react';
//  import {authLogout} from '../../redux/auth/auth.axtion'



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [flag,setFlag] = useState(false)
  const {error,isLogin} = useSelector((store)=>store.authReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const btnRef = React.useRef()
    
  const handleSide = (val)=>{
    navigate(val)
    onClose()
  }

  const handleLogout=()=>{

    //  dispatch(authLogout)
    
  }
  

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position='sticky' top={'0'} zIndex='2' >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            ref={btnRef}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack  alignItems={'center'} display={flag?{ base: 'none', md: 'flex' }:"flex"}    >
            <Box>
                <Image src='/images/2.png' w='60px' objectFit={'cover'} onClick={()=>{navigate('/')}}  />
            </Box>
                <Heading color={'red.500'} size={{ md: 'md', lg: 'lg' }} >MartMate</Heading>
           
          </HStack>
          {
            isLogin &&  <Flex >
                        <Box display={{ base: 'none', md: 'flex' }} >
                            <Menu>
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
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
                            <Input type='text' placeholder='Enter Product / service' borderColor={'teal'} />
                            <Button colorScheme={'teal'} ml='5px' mr='5px' >
                                <Search2Icon   />
                            </Button>
                        </InputGroup>
                        </Box>

                    </Flex>
          }
         
          <Flex alignItems={'center'}>
          <HStack
              as={'nav'}
              spacing={4}
              justifyContent='space-evenly'
              pr='15px'
              display={{ base: 'none', md: 'flex' }}>
                <Button flexDirection={'column'} size='lg' p='10px' _hover={{ color:'teal' }} >
                     <Icon   as={MdSell} boxSize={5}  /> 
                     <Text  fontWeight={'bold'}>sell</Text>
                </Button>
                <Button flexDirection={'column'} size='lg' p='10px'  >
                     <Icon  as={''} boxSize={5} /> 
                     <Text  fontWeight={'bold'} _hover={{ color:'teal' }} >Help</Text>
                </Button>
                <Button flexDirection={'column'} size='lg' p='10px' _hover={{ color:'teal' }}  >
                     <Icon   as={MdOutlineMessage} boxSize={5} /> 
                     <Text  fontWeight={'bold'}>masaage</Text>
                </Button>
            </HStack>

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem >
                  {
                    !isLogin && <Navlink to='/login' ><Button colorScheme='teal'>Login</Button></Navlink> 
                  }
                </MenuItem>
                <MenuItem>
                    <Button colorScheme='blue'  >Admin</Button>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                    {
                        isLogin && <Button colorScheme='red' onClick={handleLogout} >Logout</Button>
                    } 
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader textAlign={'center'}  >
                <Avatar
                    
                    size={'xl'}
                    src={
                        '/images/2.png'
                    }
                />
                
            </DrawerHeader>
            <hr />
            <DrawerBody >
                <VStack alignItems={'flex-start'} >
                    <Button w='100%'  size='lg' p='10px' columnGap={'10px'} onClick={()=>{handleSide('/')}}  _hover={{ color:'teal' }} >
                        <Icon   as={MdHome} boxSize={5}  /> 
                        <Text  fontWeight={'bold'}>Home</Text>
                    </Button>
                    <Button w='100%' size='lg' p='10px' columnGap={'10px'} onClick={()=>{handleSide('/')}} _hover={{ color:'teal' }} >
                        <Icon   as={MdSell} boxSize={5}  /> 
                        <Text  fontWeight={'bold'}>Sell</Text>
                    </Button>
                    <Button  w='100%'  size='lg' p='10px' columnGap={'10px'} onClick={()=>{handleSide('/')}} _hover={{ color:'teal' }} >
                        <Icon  as={''} boxSize={5} /> 
                        <Text  fontWeight={'bold'}>Help</Text>
                    </Button>
                    <Button  w='100%' size='lg' p='10px' columnGap={'10px'} onClick={()=>{handleSide('/')}} _hover={{ color:'teal' }}  >
                        <Icon   as={MdOutlineMessage} boxSize={5} /> 
                        <Text  fontWeight={'bold'}>Message</Text>
                    </Button>
                </VStack>  
            </DrawerBody>          
          </DrawerContent>
        </Drawer>
        ) : false}
      </Box>

     
    </>
  );
}