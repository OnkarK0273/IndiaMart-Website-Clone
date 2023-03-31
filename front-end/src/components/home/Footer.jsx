import {
  Box,
  Heading,
  HStack,
  Text,
  Icon,
  VStack,
  Grid,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillAndroid,
  AiFillApple,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { footerData } from "../../utils/data";

export function Footeritems({ title, des1, des2, des3 }) {
  return (
    <VStack alignItems={"flex-start"}>
      <Heading size="md" textAlign={"left"}>
        {title}
      </Heading>
      <Text textAlign={"left"}>{des1}</Text>
      <Text textAlign={"left"}>{des2}</Text>
      <Text textAlign={"left"}>{des3}</Text>
    </VStack>
  );
}

export default function Footer() {
  return (
    <Box pl="10%" pr="10%" pt="20px" pb="20px" bg="gray.200">
      <Stack
        justifyContent={"space-between"}
        pb="20px"
        flexDir={{ base: "column", md: "row" }}
      >
        <Heading size={"md"}>We are here to help you!</Heading>
        <HStack alignItems={"center"}>
          <Text>Go Mobile:</Text>
          <Box>
            <Icon as={AiFillAndroid} boxSize={7} />
            <Icon as={AiFillApple} boxSize={7} />
          </Box>
          <Text>Follow us on:</Text>
          <Box>
            <Icon color={"blue"} as={AiFillFacebook} boxSize={7} />
            <Icon color={"blue.400"} as={AiFillLinkedin} boxSize={7} />
            <Icon color={"skyblue"} as={AiFillTwitterSquare} boxSize={7} />
          </Box>
        </HStack>
      </Stack>
      <Box>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
          }}
          gap={3}
        >
          {footerData.map((el, i) => (
            <Footeritems key={i} {...el} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
