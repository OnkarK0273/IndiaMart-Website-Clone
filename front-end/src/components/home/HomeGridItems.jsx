import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function HomeGridItems({ img, tittle, sub1, sub2, sub3 }) {
  return <Box boxShadow='md' rounded='md' bg='white'>

            <Flex columnGap={'10px'} flexDirection={{base:"column",md:'row'}} >
                <Box  >
                    <Image  src={img} />
                </Box>
                <Box >
                    <Text fontWeight={'bold'}  >{tittle}</Text>
                    <Box display={{base:'none',md:"contents"}} >
                        <Text fontWeight={'semibold'} >{sub1}</Text>
                        {/* <Text fontWeight={'semibold'}>{sub2}</Text>
                        <Text fontWeight={'semibold'}>{sub3}</Text> */}
                    </Box>
                </Box>
            </Flex>

    </Box>
}
