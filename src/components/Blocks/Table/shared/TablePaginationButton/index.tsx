import { Flex } from '@chakra-ui/react';
import React from 'react';
import { rem } from 'helpers/misc';
import { CustomButton } from 'components/Atoms';

const TablePageButton = ({
  number,
  setSelected,
  selected,
  handleClick,
}: {
  number: number;
  setSelected: (x: number) => void;
  selected: number;
  handleClick: (x: number) => void;
}) => (
  <Flex>
    <CustomButton 
        color="gray" 
        fontWeight={400} 
        btype='line' 
        lineHeight={{ ...rem(20) }}
        fontSize={{ ...rem(15) }}
        w={{ ...rem(40) }}
        h={{ ...rem(40) }}
        title={number.toString()} 
        onClick={() => {
        setSelected(number);
        handleClick(number);
      }}/>
  </Flex>
);

export default TablePageButton;