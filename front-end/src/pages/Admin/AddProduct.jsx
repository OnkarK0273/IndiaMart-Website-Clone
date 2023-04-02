import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import AdminBulbsPanel from "./AdminBulbsPanel";
import AdminMachinesCard from "../../Components/AdminMachinesCard";
import AdminMedicinesPanel from "./AdminMedicinesPanel";
import AdminPlywoodPanel from "./AdminPlywoodPanel";
import AdminMachinesPanel from "./AdminMachinesPanel";

const AddProduct = () => {
  return (
    <Box
      width={{ base: "100%", md: "70%", lg: "80%" }}
      border="1px solid black"
      m="auto"
      mt="-2rem"
      mr={0}
      top="0"
      zIndex="10"
    >
      <Flex flexDir={"column"}>
        <Box width={"full"} border="1px solid red">
          <Tabs size="md" variant="enclosed" colorScheme={"messenger"}>
            <TabList position={"sticky"} top="0" backgroundColor={"white"} zIndex="12">
              <Tab>Plywoods</Tab>
              <Tab>Machines</Tab>
              <Tab>Bulbs</Tab>
              <Tab>Medicines</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box borderTop={"1px solid black"}>
                  <AdminPlywoodPanel />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box borderTop={"1px solid black"}>
                  <AdminMachinesPanel />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box borderTop={"1px solid black"}>
                  <AdminBulbsPanel />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box borderTop={"1px solid black"}>
                  <AdminMedicinesPanel />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddProduct;
