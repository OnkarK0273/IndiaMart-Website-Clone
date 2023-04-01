import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { postMachine } from "../../redux/MachineAdmin/machineadmin.action";

const AddNewMachines = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    title: "", //
    price: 0, //
    desc: "", //
    Machine_Type: "", //
    desc_2: "", //
    desc_3: "", //
    Machine_Gauges: "", //
    supplier: "", //
    supplier_Addres: "", //
    cl: "", //
    mob: "",
    contact: "",
    img1: "",
    img2: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = () => {
    dispatch(postMachine(product));
  };
  return (
    <Box
      width={{ base: "100%", md: "70%", lg: "80%" }}
      border="1px solid black"
      m="auto"
      mr={0}
      top="0"
      zIndex="10"
    >
      <Box w={{ base: "90%", md: "30rem", lg: "40rem" }} m="auto">
        <Heading textAlign={"center"}>Add New Product</Heading>
        <FormControl>
          <FormLabel>Title :</FormLabel>
          <Input type="text" name="title" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Price :</FormLabel>
          <Input type="Number" name="price" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Description :</FormLabel>
          <Input type="text" name="desc" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Machine Type :</FormLabel>
          <Input type="text" name="Machine_Type" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Description 2 :</FormLabel>
          <Input type="text" name="desc_2" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Description 3 :</FormLabel>
          <Input type="text" name="desc_3" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Machine Gauges :</FormLabel>
          <Input type="text" name="Machine_Gauges" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Supplier :</FormLabel>
          <Input type="text" name="supplier" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Supplier Address :</FormLabel>
          <Input type="text" name="supplier_Addres" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Color :</FormLabel>
          <Input type="text" name="cl" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Mobile :</FormLabel>
          <Input type="Number" name="mob" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Contact :</FormLabel>
          <Input type="text" name="contact" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Image 1 :</FormLabel>
          <Input type="text" name="img1" onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Image 2 :</FormLabel>
          <Input type="text" name="img2" onChange={handleChange} />
        </FormControl>

        <Button
          m="auto"
          w={"50%"}
          mt={"0.5rem"}
          mb="2rem"
          onClick={() => handleSubmit()}
          backgroundColor={"cyan.300"}
        >
          {" "}
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default AddNewMachines;
