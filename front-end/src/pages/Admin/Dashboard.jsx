import { Box } from "@chakra-ui/react";
import { Chart } from "react-google-charts";

import React, { useEffect } from "react";
import {
  getAdminData,
  getPlywoodProducts,
  getUsersData,
} from "../../redux/Admin/admin.action";
import { useDispatch, useSelector } from "react-redux";
import StatsMainDashboard from "./StatsMainDashboard";
import { getBulb } from "../../redux/BulbAdmin/bulbadmin.action";
import { getMachine } from "../../redux/MachineAdmin/machineadmin.action";

const Dashboard = () => {
  const { plyWoodProducts, admins, users ,totalPly} = useSelector(
    (store) => store.product
  );
  const { bulbs } = useSelector((store) => store.bulb);
  const { machins } = useSelector((store) => store.machine);
  console.log("totalPly",machins);
  const dispatch = useDispatch();
  
  // charts
  const data = [
    ["Categories", "No of Products"],
    ["Plywood", totalPly],
    ["Medicines", 2],
    ["Bulbs", bulbs?.length],
    ["Machines", machins?.length],
  ];
  const options = {
    title: "Total Products",
    is3D: true,
  };

  useEffect(() => {
    dispatch(getPlywoodProducts());
    dispatch(getUsersData());
    dispatch(getAdminData());
    dispatch(getBulb());
    dispatch(getMachine())
  }, [dispatch]);

  return (
    <div>
      <Box
        m="auto"
        mt="-2rem"
        mr={"0"}
        position={{base:'relative', md :"sticky", lg:'sticky'}}
        top={{base:"5rem",md:"0rem",lg:"0rem"}}
        zIndex={"13"}
        // border={"1px solid red"}
        w={{ base: "full", md: "70%", lg: "80%" }}
        textAlign={"center"}
        backgroundColor="gray.100"
      >
        <StatsMainDashboard
          totalPly={totalPly}
          users={users}
          admins={admins}
          bulbs={bulbs}
          machines ={machins}
        />
      </Box>
      <Box 
      // border={"1px solid red"}  
      m="auto"
        mr={"0"}
        mt={{base:"5rem",lg:"0"}}
        w={{ base: "full", md: "70%", lg: "80%" }}
        textAlign={"center"}>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </Box>
    </div>
  );
};

export default Dashboard;
