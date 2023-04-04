import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  Modal,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlywoodCard from "./PlywoodCard";
import { MdAddBox } from "react-icons/md";
import {
  addPlywoods,
  getPlywoods,
  patchPlywoods,
} from "../../../redux/sell/sell.action";
export default function PlywoodPanal() {
  const { plyWoods } = useSelector((store) => store.sellReducer);
  const { token } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const [quan, setquan] = useState("");
  const [size, setsize] = useState("");
  const [Color, setColor] = useState("");
  const [UsageApplication, setUsageApplication] = useState("");
  const [Thickness, setThickness] = useState("");
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
    quan,
    size,
    Color,
    UsageApplication,
    Thickness,
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
    setquan(quan);
    setsize(size);
    setColor(Color);
    setUsageApplication(UsageApplication);
    setThickness(Thickness);
    setBrand(Brand);
    setsupplier(supplier);
    setsupplier_Addres(supplier_Addres);
    setmob(mob);
    setimg1(img1);
    setimg2(img2);
    setId(id);
    setFlag(true);
    onOpen();
  };

  const addDetails = () => {
    settitle("");
    setprice(0);
    setquan("");
    setsize("");
    setColor("");
    setUsageApplication("");
    setThickness("");
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
      quan,
      size,
      Color,
      UsageApplication,
      Thickness,
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

    dispatch(addPlywoods(payload, headers)).then(() => {
      dispatch(getPlywoods(headers));
    });

    onClose();
  };

  const handleUpdate = () => {
    const payload = {
      title,
      price,
      quan,
      size,
      Color,
      UsageApplication,
      Thickness,
      Brand,
      supplier,
      supplier_Addres,
      mob,
      img1,
      img2,
      
    };

    const headers = {
      "Content-Type": "application/json",
      token: token, // replace token with your actual token value // replace token with your actual token value
    };

    dispatch(patchPlywoods(payload, id, headers)).then(() => {
      dispatch(getPlywoods(headers));
    });

    onClose();
  };

  
  return (
    <Box>
      {/* Add btn */}
      <Box>
        <Flex justifyContent={"end"} alignItems={"right"} mr="1rem">
          <Button p="10px" onClick={addDetails}>
            <Icon as={MdAddBox} boxSize={6} />
            <Text>Add Product</Text>
          </Button>
        </Flex>
      </Box>

      {/* product cards */}
      {plyWoods?.map((el) => (
        <Box key={el._id}>
          <PlywoodCard product={el} setDetails={setDetails} />
        </Box>
      ))}

      {/* modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Plywood</ModalHeader>
          <ModalCloseButton />

          <Box w="80%" m="auto">
            <FormControl>
              <FormLabel>Title :</FormLabel>
              <Input
                type="text"
                name="title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Price :</FormLabel>
              <Input
                type="Number"
                name="price"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Quantity :</FormLabel>
              <Input
                type="text"
                name="quan"
                value={quan}
                onChange={(e) => setquan(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Size :</FormLabel>
              <Input
                type="text"
                name="size"
                value={size}
                onChange={(e) => setsize(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Color :</FormLabel>
              <Input
                type="text"
                name="Color"
                value={Color}
                onChange={(e) => setColor(e.target.value)}
              />
            </FormControl>
            {/* <FormControl>
              <FormLabel>Wood Type :</FormLabel>
              <Input
                type="text"
                name="Wood_Type"
                // value={product?.Wood_Type}
                // onChange={handleChange}
              />
            </FormControl> */}
            <FormControl>
              <FormLabel>Usage Application :</FormLabel>
              <Input
                type="text"
                name="UsageApplication"
                value={UsageApplication}
                onChange={(e) => setUsageApplication(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Thickness :</FormLabel>
              <Input
                type="Number"
                name="Thickness"
                value={Thickness}
                onChange={(e) => setThickness(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Brand :</FormLabel>
              <Input
                type="text"
                name="Brand"
                value={Brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Supplier :</FormLabel>
              <Input
                type="text"
                name="supplier"
                value={supplier}
                onChange={(e) => setsupplier(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Supplier Address :</FormLabel>
              <Input
                type="text"
                name="supplier_Addres"
                value={supplier_Addres}
                onChange={(e) => setsupplier_Addres(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Mobile :</FormLabel>
              <Input
                type="Number"
                name="mob"
                value={mob}
                onChange={(e) => setmob(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Image 1 :</FormLabel>
              <Input
                type="text"
                name="img1"
                value={img1}
                onChange={(e) => setimg1(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Image 2 :</FormLabel>
              <Input
                type="text"
                name="img2"
                value={img2}
                onChange={(e) => setimg2(e.target.value)}
              />
            </FormControl>
          </Box>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {flag ? (
              <Button
                variant="ghost"
                 onClick={handleUpdate}
              >
                Update
              </Button>
            ) : (
              <Button
                variant="ghost"
                onClick={handleAdd}
              >
                Add
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
