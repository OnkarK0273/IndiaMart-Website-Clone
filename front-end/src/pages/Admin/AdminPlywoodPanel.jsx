import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import AdminPlywoodCard from "../../Components/AdminPlywoodCard";
import {
  getPlywoodProducts,
  postProduct,
  updatePlywoodProducts,
} from "../../redux/Admin/admin.action";
import PlyUpdate from "./AddNewProduct";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import axios from "axios";
import { baseURL } from "../../utils/variables";

const AdminPlywoodPanel = () => {
  const [product, setProduct] = useState({});
  const [searchparams, setsearchparams] = useSearchParams();
  const initColor = searchparams.get("color");
  const initPage = searchparams.get("page");
  const initLimit = searchparams.get("limit");
  const initPrice = searchparams.get("price");
  const initOrder = searchparams.get("orderBy");

  const [Page, setPage] = useState(initPage || 1);
  const [color, setColor] = useState(initColor || "");
  const [limit, setLimit] = useState(initLimit || 10);
  const [price, setPrice] = useState(initPrice || 0);
  const [order, setOrder] = useState(initOrder || "asc");
  const [token, setToken] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { plyWoodProducts, totalPly } = useSelector((store) => store.product);
  console.log(plyWoodProducts);

  // console.log(totalply);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    // handleSubmit(product)
    console.log(product);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    setToken(token);
    if (color || Page) {
      const getPlyParams = {
        params: {
          Color: color,
          page: Page,
          limit: limit,
          price: price,
          order: order,
        },
      };
      const headers = {
        "Content-Type": "application/json",
        token: token,
      };
      // console.log("headers",getPlyParams.params.Color)
      setsearchparams(getPlyParams.params);
      dispatch(getPlywoodProducts(color, Page, limit, order, price));
    }

    // console.log("page",Page)
    // console.log("Total",totalPly)
    // console.log("plyTotal",Math.ceil(totalPly/limit))
  }, [color, Page, limit, order, price]);

  const handleSubmit = () => {
    console.log(product);
    dispatch(updatePlywoodProducts(product));
  };

  const getId = useCallback((prod) => {
    // setId(id)
    console.log("prod", prod);
    setProduct(prod);
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal PLywood</ModalHeader>
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
        <Box
          w="full"
          p="0.5rem"
          position="sticky"
          top="2.5rem"
          backgroundColor={"white"}
          zIndex="12"
        >
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Flex justifyContent={"start"} alignItems="center">
              <Box bgColor="cyan.100">
                <Select
                  placeholder="Select color"
                  onChange={(e) => setColor(e.target.value)}
                >
                  <option value="brown">Brown</option>
                  <option value="black">Black</option>
                </Select>
              </Box>
              <Box bgColor="cyan.100" m={"0 0.5rem"}>
                <Select
                  placeholder="Select price"
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="500">{` 500 <`}</option>
                  <option value="1000">{` 1000 <`}</option>
                  <option value="1500">{` 1500 <`}</option>
                  <option value="2000">{` 2000 <`}</option>
                  <option value="2500">{` 2500 <`}</option>
                  <option value="3000">{` 3000 <`}</option>
                </Select>
              </Box>
            </Flex>
            <Button
              onClick={() => navigate(`/addNewProduct`)}
              backgroundColor="cyan.300"
            >
              Add Plywood{" "}
            </Button>
          </Flex>
        </Box>

        {plyWoodProducts &&
          plyWoodProducts?.map((el) => (
            <Box key={el._id}>
              <AdminPlywoodCard product={el} getId={getId} open={onOpen} />
            </Box>
          ))}
      </Box>
      <Box postion="sticky" bottom="0rem" zIndex={"12"}>
        <Button
          isDisabled={Page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          prev
        </Button>
        <Button isDisabled="true">{Page}</Button>
        <Button
          isDisabled={Page === Math.ceil(totalPly / limit)}
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </Button>
      </Box>
    </>
  );
};

export default AdminPlywoodPanel;
