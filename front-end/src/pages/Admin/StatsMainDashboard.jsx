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
  
  export default function StatsMainDashboard({totalPly,admins,users,bulbs,machines}) {
    const user = JSON.parse(sessionStorage.getItem('user'))

    return (
      <Box maxW="5xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Plywoods'}
            stat={totalPly}
            icon={<RiProductHuntLine size={"4rem"}/>}
          />
{
  user?.role==="super_admin"?<StatsCard 
  title={'Admins'}
  stat={admins?.length}
  icon={<RiAdminFill size={"4rem"}/>}
/>:null
}
          
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
          <StatsCard
            title={'Machines'}
            stat={machines?.length}
            icon={<BsFillLightbulbFill size={'3em'} />}
          />
          {/* <StatsCard
            title={'Datacenters'}
            stat={'7'}
            icon={<GoLocation size={'3em'} />}
          /> */}
        </SimpleGrid>
      </Box>
    );
  }