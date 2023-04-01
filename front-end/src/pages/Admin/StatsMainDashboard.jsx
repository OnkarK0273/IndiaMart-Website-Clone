import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';

  import { BsFillLightbulbFill, BsPerson } from 'react-icons/bs';
  import { FiUser } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';
  import { RiAdminFill, RiProductHuntLine } from "react-icons/ri"
  function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}
        backgroundColor="cyan.100" 
        mb="1rem">
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'bold'} isTruncated >
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function StatsMainDashboard({plywood,admins,users,bulbs}) {
    return (
      <Box maxW="5xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} mt="0.4rem">
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Products 
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Plywoods'}
            stat={plywood?.length}
            icon={<RiProductHuntLine size={"4rem"}/>}
          />
          <StatsCard 
            title={'Admins'}
            stat={admins?.length}
            icon={<RiAdminFill size={"4rem"}/>}
          />
          <StatsCard 
            title={'Users'}
            stat={users?.length}
            icon={<FiUser size={"4rem"}/>}
          />
          <StatsCard 
            title={'Bulbs'}
            stat={bulbs?.length}
            icon={<BsFillLightbulbFill size={"4rem"}/>}
          />
          {/* <StatsCard
            title={'Bulbs'}
            stat={'30'}
            icon={<BsFillLightbulbFill size={'3em'} />}
          /> */}
          {/* <StatsCard
            title={'Datacenters'}
            stat={'7'}
            icon={<GoLocation size={'3em'} />}
          /> */}
        </SimpleGrid>
      </Box>
    );
  }