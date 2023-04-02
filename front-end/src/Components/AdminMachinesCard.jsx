import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProductProduct } from "../redux/Admin/admin.action";
import { deleteMachine } from "../redux/MachineAdmin/machineadmin.action";

export default function AdminMachinesCard({ product, open, getId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    _id,
    title,
    price,
    desc,
    Machine_Type,
    Machine_Gauges,
    supplier,
    supplier_Addres,
    contact,
    img1,
  } = product;

  const [prod, setProduct] = useState({
    title,
    price,
    desc,
    Machine_Type,
    Machine_Gauges,
    supplier,
    supplier_Addres,
    contact,
    img1,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "100%", lg: "70%" }}
        //   height={{ sm: '476px', md: '20rem' }}
        h={{ md: "20rem", lg: "15rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image objectFit="cover" boxSize="100%" w={"100%"} src={img1} />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {title}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            {Machine_Type}
          </Text>

          <Stack align={"left"} justify={"left"} direction={"row"} mt={6}>
            <Text
              textAlign={"left"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
              noOfLines="1"
            >
              Mob: {contact}
            </Text>
            <Text
              textAlign={"left"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              Price: {price}
            </Text>
          </Stack>
          {/* <Stack align={'center'} justify={'left'} direction={'row'} mt={6}> */}
          <Text
            textAlign={"left"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
            noOfLines="2"
          >
            Supplier: {supplier}
          </Text>
          <Text
            textAlign={"left"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            Address: {supplier_Addres}
          </Text>
          {/* </Stack> */}

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg="gray.200"
              onClick={() => {
                open();
                // navigate(`/addProduct/${_id}`);
                getId(prod);
              }}
            >
              Edit
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "red.500",
              }}
              _focus={{
                bg: "red.500",
              }}
              onClick={() => dispatch(deleteMachine(_id))}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
