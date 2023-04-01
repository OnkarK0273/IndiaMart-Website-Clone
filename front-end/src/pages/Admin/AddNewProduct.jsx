import { Box, Button, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { postProduct } from '../../redux/Admin/admin.action';
const AddNewProduct = () => {
    const dispatch = useDispatch()
    const [product ,setProduct] = useState({
        "title":"",
        "price":0,
        "quan":"",
        "size":"",
        "Color":"",
        "Wood_Type":"",
        "UsageApplication":"",
        "Thickness":0,
        "brand":"",
        "supplier":"",
        "supplier_Addres":"",
        "mob":0,
        "contact":"",
        "img1":"",
        "img2":"",
        "img3":"",
        "img4":"",
    
    })

    const handleChange=(e)=>{
         setProduct({...product,[e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
        dispatch(postProduct(product))
           
    }

  return (
    <Box width={{ base: "100%", md: "70%", lg: "80%" }}
    border="1px solid black"
    m="auto"
    mr={0}
    top="0"
    zIndex="10"
    >
            <Box w={{base:"90%",md:"30rem",lg:"40rem"}} m="auto">
                <Heading textAlign={"center"}>Add New Product</Heading>
      <FormControl>
        <FormLabel>Title :</FormLabel>
        <Input type="text" name="title"  onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Price :</FormLabel>
        <Input type="Number" name="price"  onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Quantity :</FormLabel>
        <Input type="text" name="quan" onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Size :</FormLabel>
        <Input type="text" name="size"  onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Color :</FormLabel>
        <Input type="text" name="Color" onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Wood Type :</FormLabel>
        <Input type="text" name="Wood_Type" onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Usage Application :</FormLabel>
        <Input type="text" name="UsageApplication"  onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Thickness :</FormLabel>
        <Input type="Number" name="Thickness"  onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Brand :</FormLabel>
        <Input type="text" name="Brand"  onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Supplier :</FormLabel>
        <Input type="text" name="supplier" onChange={handleChange}  />
      </FormControl>
      <FormControl>
        <FormLabel>Supplier Address :</FormLabel>
        <Input type="text" name="supplier_Addres" onChange={handleChange}  />
      </FormControl>
      <FormControl>
        <FormLabel>Mobile :</FormLabel>
        <Input type="Number" name="mob" onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Contact :</FormLabel>
        <Input type="text" name="contact" onChange={handleChange}  />
      </FormControl>
      <FormControl>
        <FormLabel>Image 1 :</FormLabel>
        <Input type="text" name="img1"  onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Image 2 :</FormLabel>
        <Input type="text" name="img2"  onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Image 3 :</FormLabel>
        <Input type="text" name="img3" onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Image 4 :</FormLabel>
        <Input type="text" name="img4"  onChange={handleChange} />
      </FormControl>

      <Button  m="auto" w={"50%"} mt={"0.5rem"} mb="2rem" onClick={()=>handleSubmit()} backgroundColor={"cyan.300"}> Submit</Button>
    </Box>
    </Box>
  )
}

export default AddNewProduct