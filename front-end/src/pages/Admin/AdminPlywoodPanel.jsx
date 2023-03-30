import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminPlywoodCard from '../../Components/AdminPlywoodCard'
import { getPlywoodProducts } from '../../redux/Admin/admin.action'

const AdminPlywoodPanel = () => {

    
  const {plyWoodProducts} = useSelector(store=>store.product)
  console.log(plyWoodProducts)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPlywoodProducts())
  },[dispatch])

  return (
    <Box>

             <Box>
                  <Flex justifyContent={"end"} alignItems={"right"} mr="1rem">
                  <Button>add plywood </Button>

                  </Flex>
                </Box>

        {
            plyWoodProducts && plyWoodProducts?.map(el=>(
                <Box key={el._id}>
                    <AdminPlywoodCard product = {el}/>
                    </Box>
                    ))
                }
               
    </Box>
  )
}

export default AdminPlywoodPanel