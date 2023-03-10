import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

const PageHeader:FC<{title: string, children?: JSX.Element}> = ({title, children}) => {
  // if user is online, return the child component else return a custom component

  return (
    <Flex align={"center"} justify="space-between" w="100%" color="kc.500" borderBottomWidth={2} borderColor="kc.500" pb={6}>
        <Text textTransform={"uppercase"} fontSize={14} fontWeight={600}>{title}</Text>
        {children}
    </Flex>
  );
};

export default PageHeader;
