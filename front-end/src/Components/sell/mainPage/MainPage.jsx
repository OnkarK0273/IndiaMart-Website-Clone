import React from 'react'
import {
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Button,
    Avatar,
    Box,
    Divider,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Icon,
    VStack
  } from "@chakra-ui/react";
  import { FiLogOut } from "react-icons/fi";
  import { MdHome ,MdOutlineProductionQuantityLimits,MdAddBox,MdSettings,MdAccountBox} from 'react-icons/md'
  import { AiFillInfoCircle } from "react-icons/ai";
  import { Link, useNavigate } from "react-router-dom";
import { useRef } from 'react';
import AdminDrawer from './AdminDrawer';
import Dashbord from "../tabs/Dashbord"
import Product from "../tabs/Product"
import Add from '../tabs/Add'
import Setting from '../tabs/Setting'
import Account from '../tabs/Account'
export default function MainPage() {
    const navigate = useNavigate()
    const prodRef= useRef();
    const dashboardRef = useRef();
    const customerRef = useRef();
    const orderRef = useRef();
    const accountRef = useRef();
  return (
    <div>
         <Tabs display={"flex"}>
        <TabList
          display={{ base: "none", md: "inherit" }}
          textAlign={"center"}
          flexDirection={"column"}
          justifyContent={'space-evenly'}
          alignItems='center'
          w={{ md: "15%", lg: "10%" }}
          padding={"15px"}
          backgroundColor={"#3CB6FC"}
          color={"white"}
          position={"fixed"}
          top={0}
          left={0}
          h={"100vh"}
        >
          
          <Box w='70%' onClick={()=>{navigate('/')}} cursor="pointer" >
             <Avatar src='/images/2.png' size='ls'   />
          </Box>
          

          <Tab
            ref={dashboardRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
        
            _selected={{
              color: "black",
              bg: "blue.200",
              transform: "scale(1.05)",
              transition: "0.8s",
            }}
          >
            <VStack>
                <Icon   as={MdHome} boxSize={6}  /> 
                <Text > Dashboard</Text>
            </VStack>
           
          </Tab>
          <Tab
            ref={prodRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "black",
              bg: "blue.200",
              transform: "scale(1.05)",
              transition: "0.8s",
            }}
          >
            <VStack>
                <Icon   as={MdOutlineProductionQuantityLimits} boxSize={6}  /> 
                <Text> Products</Text>
            </VStack>
          </Tab>

          <Tab
            ref={customerRef}
            mb={"5px"}
            borderRadius={"5px"}
           
            // transition={"0.8s"}
            _selected={{
              color: "black",
              bg: "blue.200",
              transform: "scale(1.05)",
              transition: "0.8s",
            }}
          >
            <VStack>
                <Icon  as={MdSettings} boxSize={6}  /> 
                <Text>Settings</Text>
            </VStack>
          </Tab>
          <Box padding={"0px 0px"}>
            <Divider />
          </Box>
          <Tab
            ref={accountRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "black",
              bg: "blue.200",
              transform: "scale(1.05)",
              transition: "0.8s",
            }}
          >
            <VStack>
                <Icon  as={MdAccountBox} boxSize={6}  /> 
                <Text>Account Info</Text>
            </VStack>
            
          </Tab>
          
        </TabList>

            {/* tab panals */}
        <TabPanels pl={{ md: "15%", lg: "10%" }}  bg='whitesmoke'>
          <TabPanel p={0}  >
            <Dashbord/>
          </TabPanel>
          <TabPanel p={0}>
            <Product/>
          </TabPanel>

          <TabPanel p={0}>
            < Setting/>
          </TabPanel>
          <TabPanel p={0}>
            <Account/>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* sidebar */}
      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"10px"}
        backgroundColor={"#3CB6FC"}
        color={"white"}
        position={"fixed"}
        width={"100%"}
        top={0}
        left={0}
      >
        <AdminDrawer
          orderRef={orderRef}
          dashboardRef={dashboardRef}
          customerRef={customerRef}
          prodRef={prodRef}
        />
        <Box onClick={()=>{navigate('/')}} cursor="pointer" >
            <Image src='/images/2.png' alt='logo' w='50px'   />
        </Box>
        <Box>
          {/* <Menu>
            <MenuButton pr='15px'>
              <Avatar  src={'https://avatars.githubusercontent.com/u/110043714?v=4'} name={'Onkar.k'}></Avatar>
            </MenuButton>
            <MenuList backgroundColor={"#3CB6FC"} border={"1px solid #3CB6FC"}>
              <MenuItem backgroundColor={"#3CB6FC"}>
                <Box
                  onClick={() => {
                    accountRef.current.click();
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                >
                  {" "}
                  <AiFillInfoCircle />{" "}
                  <Text ml={"20px"} fontSize={"md"}>
                    Account Info
                  </Text>
                </Box>
              </MenuItem>
              <MenuDivider />
              <MenuItem backgroundColor={"#06096B4"} color={"red.600"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                >
                  {" "}
                  <FiLogOut />{" "}
                  <Link  to='/' >
                    Logout
                  </Link>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu> */}
        </Box>
      </Box>

         
    </div>
  )
}
