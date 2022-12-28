import { Flex, Text } from '@chakra-ui/react';
import { rem } from 'helpers/misc';
import React from 'react';

const DirectionButton = ({
  title,
  selectedItem,
  onClick: direction,
}: {
  title: string;
  selectedItem: number;
  onClick: (number: number) => undefined;
}) => (
  <Flex
    minW={{ ...rem(63) }}
    h={{ ...rem(40) }}
    px={2}
    align="center"
    justify="center"
    bg="white"
    cursor="pointer"
    border="1px solid #E2E8F0"
    rounded="md"
    _hover={{ bg: 'primary', color: 'white' }}
    onClick={() => direction(selectedItem)}
  >
    <Text
      fontWeight={400}
      lineHeight={{ ...rem(20) }}
      fontSize={{ ...rem(15) }}
      color="#697070"
    >
      {title}
    </Text>
  </Flex>
);

export default DirectionButton;
