import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { RiMenu2Line } from "react-icons/ri";

const AdminDrawer = ({
  prodRef,
  orderRef,
  dashboardRef,
  customerRef,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box ref={btnRef} onClick={onOpen}>
        <RiMenu2Line fontSize={"32px"} />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        size={"full"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundColor={"#3CB6FC"}
          color={"white"}
          textAlign={"center"}
        >
          <DrawerCloseButton fontSize={"xl"} />
          <DrawerBody fontSize={"2xl"}>
            <Box
              mt={"160px"}
              p={"10px"}
              _hover={{ backgroundColor: "blue.200" }}
              onClick={() => {
                dashboardRef.current.click();
                onClose();
              }}
            >
              Dashboard
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                prodRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.200" }}
            >
              Products
            </Box>
         
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                customerRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.200" }}
            >
              Settings
            </Box>
            {/* <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                discountRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.200" }}
            >
              Discounts
            </Box> */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AdminDrawer;