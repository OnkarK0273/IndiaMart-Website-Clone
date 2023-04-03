import React from 'react';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    useToast
} from '@chakra-ui/react';

const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function ProductBottomCard({ img, title, price, supplier, supplier_Addres, mob }) {
const toast= useToast()
    console.log(title)


    return (
        <div>
            <Center py={12}>
                <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'200px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${IMAGE})`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            rounded={'lg'}
                            height={230}
                            width={282}
                            objectFit={'cover'}
                            src={img}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            {title}
                        </Text>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            ₹{price}/ Square Feet
                        </Heading>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            {supplier}
                        </Text>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            {supplier_Addres}
                        </Text>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            {mob}
                        </Text>
                        <Button onClick={()=> {toast({
          title: "Supplier will contact you ASAP!",
          status: 'success',
          duration: 1000,
          isClosable: true,
        })}}>
                            Contact Supplier
                        </Button>
                    </Stack>
                </Box>
            </Center>
        </div>

    );
}