import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { getAdminData, getPlywoodProducts, getUsersData } from '../../redux/Admin/admin.action'
import {useDispatch, useSelector} from 'react-redux'
import StatsMainDashboard from './StatsMainDashboard'
const Dashboard = () => {
  const { plyWoodProducts,admins,users} = useSelector(store=>store.product)
  console.log( plyWoodProducts)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPlywoodProducts())
    dispatch(getAdminData())
    dispatch(getUsersData("user"))
  },[])

  return (
    <div>
        <Box m="auto" mr={"0"} border={"1px solid red"}  w={{ base: 'full', md: "70%" ,lg:"80%"}} textAlign={"center"}>
        
          <StatsMainDashboard plywood={plyWoodProducts} users={users} admins={admins} />
        
        </Box>
    </div>
  )
}

export default Dashboard