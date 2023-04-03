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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminPlywoodCard from "../../Components/AdminPlywoodCard";
import { getPlywoodProducts } from "../../redux/Admin/admin.action";
import PlyUpdate from "./AddNewProduct";

const AdminMedicinesPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { plyWoodProducts } = useSelector((store) => store.product);
  // console.log(plyWoodProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlywoodProducts());
  }, [dispatch]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Medicines</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box>
        <Box>
          <Flex justifyContent={"end"} alignItems={"right"} mr="1rem">
            <Button onClick={onOpen}>Add Product</Button>
          </Flex>
        </Box>

        {plyWoodProducts &&
          plyWoodProducts?.map((el) => (
            <Box key={el._id}>
              <AdminPlywoodCard product={el} open={onOpen} />
            </Box>
          ))}
      </Box>
    </>
  );
};

export default AdminMedicinesPanel;
