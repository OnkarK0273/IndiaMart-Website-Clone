import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdminData } from "../../redux/Admin/admin.action";

const AddAdmin = () => {
    const dispatch = useDispatch()
  const [username, setUsername] = useState({
    firstname: "",
    lastname: "",
  });

  const [address, setAddress] = useState({
    city: "",
    state: "",
    country: "",
    pin: 0,
  });
  const [admin, setAdmin] = useState({
    username: {},
    address: {},
    email: "",
    password: "",
    age: 0,
    mobile:0,
    role: "admin",
  });
  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const handleUserChange = (e) => {
    setUsername({ ...username, [e.target.name]: e.target.value });
  };
  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const payload = {
      ...admin,
      username: username,
      address: address,
    };
    dispatch(postAdminData(payload));
  };
  return (
    <Box w="100%">
      <Box w="30%" p="2rem" m="auto" backgroundColor={"white"} borderRadius="1rem">
        <Heading mb={"1rem"}>Add Admin</Heading>
        <HStack>
          <FormControl>
            <FormLabel>Firstname :</FormLabel>
            <Input type="text" name="firstname" onChange={handleUserChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Lastname :</FormLabel>
            <Input type="text" name="lastname" onChange={handleUserChange} />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Age :</FormLabel>
          <Input type="number" name="age" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Mobile :</FormLabel>
          <Input type="number" name="mobile" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>email :</FormLabel>
          <Input type="text" name="email" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Password :</FormLabel>
          <Input type="text" name="password" onChange={handleChange} />
        </FormControl>
        <Text>Address</Text>

        <FormControl>
          <FormLabel>City :</FormLabel>
          <Input type="text" name="city" onChange={handleAddressChange} />
        </FormControl>
        <FormControl>
          <FormLabel>State :</FormLabel>
          <Input type="text" name="state" onChange={handleAddressChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Country :</FormLabel>
          <Input type="text" name="country" onChange={handleAddressChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Pin Code :</FormLabel>
          <Input type="text" name="pin" onChange={handleAddressChange} />
        </FormControl>

        <Button onClick={() => handleSubmit()}>Submit</Button>
      </Box>
    </Box>
  );
};

export default AddAdmin;
