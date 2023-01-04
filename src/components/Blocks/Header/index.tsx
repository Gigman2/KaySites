import { Flex, Icon, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const PageHeader:FC<{title: string, children?: JSX.Element}> = ({title, children}) => {
  // if user is online, return the child component else return a custom component

  return (
     <Flex justify="space-between" w="100%" color="kc.500" borderBottomWidth={2} borderColor="kc.500" pb={6}>
        <Text textTransform={"uppercase"} letterSpacing={-0.8} fontSize={14} fontWeight={600}>{title}</Text>

       {children}

        <Flex gap={2} fontWeight={600}>
            <Icon as={IoSearchOutline} boxSize={6} />
            <Text>Search</Text>
        </Flex>
    </Flex>
  );
};

export default PageHeader;
