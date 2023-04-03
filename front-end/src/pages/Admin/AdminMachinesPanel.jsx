import {
  Box,
  Button,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
import { baseURL } from "../../utils/variables";
import {
  getMachine,
  updateMachine,
} from "../../redux/MachineAdmin/machineadmin.action";
import AdminMachinesCard from "../../Components/AdminMachinesCard";

const AdminMachinesPanel = () => {
  // const [product, setProduct] = useState({
  //   title: "",
  //   price: 0,
  //   desc: "",
  //   Machine_Type: "",
  //   desc_2: "",
  //   desc_3: "",
  //   Machine_Gauges: "",
  //   supplier: "",
  //   supplier_Addres: "",
  //   cl: "",
  //   mob: "",
  //   contact: "",
  //   img1: "",
  //   img2: "",
  // });

  const [product, setProduct] = useState({});

  // const { id } = useParams();
  // console.log("id", id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { machins } = useSelector((store) => store.machine);
  // console.log("Machines", machins.data);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    // handleSubmit(product)
    // console.log(product);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    // getProduct();
    dispatch(getMachine());
  }, [dispatch]);

  const handleSubmit = () => {
    // console.log("machines", product?.data);
    dispatch(updateMachine(product));
  };

  // const getProduct = () => {
  //   axios
  //     .get(`${baseURL}/machines/${id}`)
  //     .then((res) => {
  //       setProduct(res.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const getId = useCallback((prod) => {
    // setId(id)
    // console.log("prod", prod);
    setProduct(prod);
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Machines</ModalHeader>
          <ModalCloseButton />

          <Box w="80%" m="auto">
            <FormControl>
              <FormLabel>Title :</FormLabel>
              <Input
                type="text"
                name="title"
                value={product?.title}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Price :</FormLabel>
              <Input
                type="Number"
                name="price"
                value={product?.price}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Quantity :</FormLabel>
              <Input
                type="text"
                name="quan"
                value={product?.quan}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Size :</FormLabel>
              <Input
                type="text"
                name="size"
                value={product?.size}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Color :</FormLabel>
              <Input
                type="text"
                name="Color"
                value={product?.Color}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Wood Type :</FormLabel>
              <Input
                type="text"
                name="Wood_Type"
                value={product?.Wood_Type}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Usage Application :</FormLabel>
              <Input
                type="text"
                name="UsageApplication"
                value={product?.UsageApplication}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Thickness :</FormLabel>
              <Input
                type="Number"
                name="Thickness"
                value={product?.Thickness}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Brand :</FormLabel>
              <Input
                type="text"
                name="Brand"
                value={product?.brand}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Supplier :</FormLabel>
              <Input
                type="text"
                name="supplier"
                value={product?.supplier}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Supplier Address :</FormLabel>
              <Input
                type="text"
                name="supplier_Addres"
                value={product?.supplier_Addres}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Mobile :</FormLabel>
              <Input
                type="Number"
                name="mob"
                value={product?.mob}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Contact :</FormLabel>
              <Input
                type="text"
                name="contact"
                value={product?.contact}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image 1 :</FormLabel>
              <Input
                type="text"
                name="img1"
                value={product?.img1}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image 2 :</FormLabel>
              <Input
                type="text"
                name="img2"
                value={product?.img2}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image 3 :</FormLabel>
              <Input
                type="text"
                name="img3"
                value={product?.img3}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image 4 :</FormLabel>
              <Input
                type="text"
                name="img4"
                value={product?.img4}
                onChange={handleChange}
              />
            </FormControl>
          </Box>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box>
        <Box>
          <Flex justifyContent={"end"} alignItems={"right"} mr="1rem">
            <Button onClick={() => navigate(`/addNewMachines`)}>
              Add Machines{" "}
            </Button>
          </Flex>
        </Box>

        {machins &&
          machins?.data?.map((el) => (
            <Box key={el._id}>
              <AdminMachinesCard product={el} getId={getId} open={onOpen} />
            </Box>
          ))}
      </Box>
    </>
  );
};

export default AdminMachinesPanel;
