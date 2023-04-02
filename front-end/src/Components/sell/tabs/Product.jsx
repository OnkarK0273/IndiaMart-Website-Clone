import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import PlywoodPanal from '../compo/plywoodPanal'
import BulbsPanal from '../compo/BulbsPanal'
import MachinsPanal from '../compo/MachinsPanal'
export default function Product() {
  return (
    <Box  minH='100vh' pt={{ base: "80px", md: "20px" }} border={'1px'} >
      <Tabs>
      <TabList>
        <Tab>bulbs</Tab>
        <Tab>PlyWoods</Tab>
        <Tab>Machins</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <BulbsPanal/>
        </TabPanel>
        <TabPanel>
          <PlywoodPanal/>
        </TabPanel>
        <TabPanel>
          <MachinsPanal/>
        </TabPanel>
      </TabPanels>
    </Tabs>

    </Box>
  )
}