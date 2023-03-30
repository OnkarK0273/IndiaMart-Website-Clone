import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { getPlywoodProducts } from '../../redux/Admin/admin.action'
import {useDispatch, useSelector} from 'react-redux'
import StatsMainDashboard from './StatsMainDashboard'
const Dashboard = () => {
  const { plyWoodProducts} = useSelector(store=>store.product)
  console.log( plyWoodProducts)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPlywoodProducts())
  },[])

  return (
    <div>
        <Box m="auto" mr={"0"} border={"1px solid red"}  w={{ base: 'full', md: "70%" ,lg:"80%"}} textAlign={"center"}>
        
          <StatsMainDashboard data={plyWoodProducts}/>
        
        </Box>
    </div>
  )
}

export default Dashboard