import { Box, Button, Flex, Icon, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BulbsCard from './BulbsCard'
import MachinesCard from './MachinsCard'
import { MdAddBox} from 'react-icons/md'
export default function MachinsPanal() {
    const {machins} = useSelector((store)=>store.sellReducer)
    const {token} = useSelector((store)=>store.authReducer)
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(()=>{

    },[])
  return (
    <Box>
    {/* add btns */}
        <Box>
          <Flex justifyContent={"end"}  alignItems={"right"} mr="1rem">
            <Button p='10px' >
                <Icon  as={MdAddBox} boxSize={6}  /> 
                <Text>Add Product</Text>
            </Button>
          </Flex>
        </Box>

    {/* product cards */}
        {
            machins?.data?.map((el) => (
            <Box key={el._id}>
            <MachinesCard product={el} open={onOpen} />
            </Box>
             ))
        }

    {/* modal */}

    </Box>
  )
}