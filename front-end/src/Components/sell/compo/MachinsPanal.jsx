import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BulbsCard from "./BulbsCard";
import MachinesCard from "./MachinsCard";
import { MdAddBox } from "react-icons/md";
import {
  addMachins,
  getMachins,
  patchMachins,
} from "../../../redux/sell/sell.action";
export default function MachinsPanal() {
  const { machins } = useSelector((store) => store.sellReducer);
  const { token } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [Machine_Type, setMachine_Type] = useState("");
  const [Brand, setBrand] = useState("");
  const [supplier, setsupplier] = useState("");
  const [supplier_Addres, setsupplier_Addres] = useState("");
  const [mob, setmob] = useState(0);
  const [img1, setimg1] = useState("");
  const [img2, setimg2] = useState("");
  const [flag, setFlag] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const setDetails = (
    title,
    price,
    Machine_Type,
    Brand,
    supplier,
    supplier_Addres,
    mob,
    img1,
    img2,
    id
  ) => {
    settitle(title);
    setprice(price);
    setMachine_Type(Machine_Type);
    setBrand(Brand);
    setsupplier(supplier);
    setsupplier_Addres(supplier_Addres);
    setmob(mob);
    setimg1(img1);
    setimg2(img2);
    setFlag(true);
    setId(id);
    onOpen();
  };

  const addDetails = () => {
    settitle("");
    setprice("");
    setMachine_Type("");
    setBrand("");
    setsupplier("");
    setsupplier_Addres("");
    setmob(0);
    setimg1("");
    setimg2("");
    setFlag(false);
    onOpen();
  };

  const handleAdd = () => {
    const payload = {
      title,
      price,
      Machine_Type,
      Brand,
      supplier,
      supplier_Addres,
      contact: "Contact Supplier",
      mob,
      img1,
      img2,
    };

    const headers = {
      "Content-Type": "application/json",
      token: token, // replace token with your actual token value
    };

    dispatch(addMachins(payload, headers)).then(() => {
      dispatch(getMachins(headers));
    });

    onClose();
  };

  const handleUpdate = () => {
    const payload = {
      title,
      price,
      Machine_Type,
      Brand,
      supplier,
      supplier_Addres,
      mob,
      img1,
      img2,
    };

    const headers = {
      "Content-Type": "application/json",
      token: token, // replace token with your actual token value
    };

    dispatch(patchMachins(payload, id, headers)).then(() => {
      dispatch(getMachins(headers));
    });

    onClose();
  };

  return (
    <Box>
      {/* add btns */}
      <Box>
        <Flex justifyContent={"end"} alignItems={"right"} mr="1rem">
          <Button p="10px" onClick={addDetails}>
            <Icon as={MdAddBox} boxSize={6} />
            <Text>Add Product</Text>
          </Button>
        </Flex>
      </Box>

      {/* product cards */}
      {machins?.map((el) => (
        <Box key={el._id}>
          <MachinesCard product={el} setDetails={setDetails} />
        </Box>
      ))}

      {/* modal */}

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
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Price :</FormLabel>
              <Input
                type="text"
                name="price"
                value={price}
                onChange={(e) => {
                  setprice(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Machine_Type :</FormLabel>
              <Input
                type="text"
                name="quan"
                value={Machine_Type}
                onChange={(e) => {
                  setMachine_Type(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Brand :</FormLabel>
              <Input
                type="text"
                name="Brand"
                value={Brand}
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Supplier :</FormLabel>
              <Input
                type="text"
                name="supplier"
                value={supplier}
                onChange={(e) => {
                  setsupplier(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Supplier Address :</FormLabel>
              <Input
                type="text"
                name="supplier_Addres"
                value={supplier_Addres}
                onChange={(e) => {
                  setsupplier_Addres(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Mobile :</FormLabel>
              <Input
                type="Number"
                name="mob"
                value={mob}
                onChange={(e) => {
                  setmob(e.target.value);
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Image 1 :</FormLabel>
              <Input
                type="text"
                name="img1"
                value={img1}
                onChange={(e) => {
                  setimg1(e.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image 2 :</FormLabel>
              <Input
                type="text"
                name="img2"
                value={img2}
                onChange={(e) => {
                  setimg2(e.target.value);
                }}
              />
            </FormControl>
          </Box>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {flag ? (
              <Button variant="ghost" onClick={handleUpdate}>
                Update
              </Button>
            ) : (
              <Button variant="ghost" onClick={handleAdd}>
                Add
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
