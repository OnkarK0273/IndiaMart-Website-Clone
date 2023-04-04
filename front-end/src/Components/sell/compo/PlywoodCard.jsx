import React, { useState } from "react";
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deletePlywoods, getPlywoods } from "../../../redux/sell/sell.action";
import { useEffect } from "react";

export default function PlywoodCard({ product, setDetails }) {
  const [id, setId] = useState("");
  const { token } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();

  const {
    _id,
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
  } = product;

  const handleDelete = () => {
    const headers = {
      "Content-Type": "application/json",
      token: token, // replace token with your actual token value// replace token with your actual token value
    };

    dispatch(deletePlywoods(id, headers)).then(() => {
      dispatch(getPlywoods(headers));
    });
  };

  useEffect(() => {
    setId(_id);
  }, [handleDelete]);

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
        padding={1}
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
            {Brand}
          </Text>

          <Stack align={"left"} justify={"left"} direction={"row"} mt={6}>
            <Text
              textAlign={"left"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
              noOfLines="1"
            >
              Mob: {mob}
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
                setDetails(
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
                  _id
                );
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
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
