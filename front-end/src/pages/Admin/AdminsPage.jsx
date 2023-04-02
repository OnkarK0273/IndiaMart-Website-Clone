import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AdminCard from "../../Components/AdminCard";
import { getAdminData, postAdminData, updateAdminData } from "../../redux/Admin/admin.action";
import { getAdminDataAPI } from "../../redux/Admin/admin.api";

const AdminsPage = () => {
const user = JSON.parse(sessionStorage.getItem('user'))

  const { admins } = useSelector((store) => store.product);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const {id} = useParams()
  const navigate=useNavigate()
  const [username,setUsername] =useState({
      "firstname": "",
      "lastname": ""
  })
  
  const [address,setAddress] =useState({
      "city": "",
      "state": "",
      "country": "",
      "pin": 0
  })
  const [admin,setAdmin] =useState({
    "username": {
        "firstname": "",
        "lastname": ""
    },
    "address": {
        "city": "",
        "state": "",
        "country": "",
        "pin": 0
    },
    "email": "",
    "password": "",
    "age": 0,
    "role": ""
})


    //  console.log("admins",admin)
    
  const dispatch = useDispatch();
//   
const getUser = (user)=>{
  // console.log(user)
   setAdmin(user)
   setAddress(user?.address)
   setUsername(user?.username)
  }
const handleAddressChange=(e)=>{
    setAddress({...address,[e.target.name]:e.target.value})
}
    const handleUserChange=(e)=>{
        setUsername({...username,[e.target.name]:e.target.value})
    
}
const handleChange=(e)=>{
    setAdmin({...admin,[e.target.name]:e.target.value})
    
}

const update=()=>{
    const payload={
        ...admin,
        username:username,
        address:address,
    }
    dispatch(updateAdminData(payload))
}
useEffect(() => {
    dispatch(getAdminData());
}, [id,dispatch]);

// console.log("admin",admin)

if(user?.role==="admin"){
  return (
    <>
    <Box width={{ base: "100%", md: "70%", lg: "80%" }}
      border="1px solid black"
      m="auto"
      mr={0}
      h={"100vh"}
      mt={"-2rem"}
    zIndex="10" left={"50%"} pt="50vh">
      <Heading>
        You are Authorised person
      </Heading>
    </Box>
    </>
  )

}
  return (
    <Box
      width={{ base: "100%", md: "70%", lg: "80%" }}
      border="1px solid black"
      m="auto"
      mt={"-2rem"}
      mr={0}
      top="0"
    zIndex="10"
    >
      <Flex justifyContent={"end"} mr="1rem" mt="1rem">
        <Button bgColor={"cyan.300"} onClick={()=>navigate('/addAdmin')}>Add Admin</Button>
      </Flex>
      <Flex m={"1rem"} flexWrap={"wrap"} gap="2rem">
        {admins &&
          admins?.map((admin) => <AdminCard getUser={getUser}  key={admin._id} admin={admin} open={onOpen}/>)}
      </Flex>
      

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Edit Admin </ModalHeader>
    <ModalCloseButton />
    <Box w="80%" m="auto">
        <HStack>

      <FormControl>
        <FormLabel>Firstname :</FormLabel>
        <Input type="text" name="firstname" value={username?.firstname} onChange={handleUserChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Lastname :</FormLabel>
        <Input type="text" name="lastname" value={username?.lastname} onChange={handleUserChange} />
      </FormControl>
        </HStack>
        <FormControl>
        <FormLabel>Age :</FormLabel>
        <Input type="number" name="age" value={admin?.age} onChange={handleChange} />
      </FormControl>
        <FormControl>
        <FormLabel>email :</FormLabel>
        <Input type="text" name="email" value={admin?.email} onChange={handleChange} />
      </FormControl>
        <Text>Address</Text>
      
      <FormControl>
        <FormLabel>City :</FormLabel>
        <Input type="text" name="city" value={address?.city} onChange={handleAddressChange} />
      </FormControl>
      <FormControl>
        <FormLabel>State :</FormLabel>
        <Input type="text" name="state" value={address?.state} onChange={handleAddressChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Country :</FormLabel>
        <Input type="text" name="country" value={address?.country} onChange={handleAddressChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Pin Code :</FormLabel>
        <Input type="text" name="pin" value={address?.pin} onChange={handleAddressChange} />
      </FormControl>
     
    </Box>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost' on
      onClick={()=>update()}>Submit</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </Box>

    
  );
};

export default AdminsPage;
