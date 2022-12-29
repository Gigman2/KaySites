import React, { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import t from 'typy';
import { rem } from '../../../helpers/misc';

const TableContent = ({
  isEven,
  renderer,
  item,
  index,
  isClickable,
  onClick,
}: {
  onClick?: (x: unknown) => void;
  isClickable?: boolean;
  item: unknown;
  index: number;
  isEven?: boolean;
  renderer: {
    name: string;
    id: string | number;
    selector?: string | 'numbering' | ((x: unknown, l: number) => ReactElement);
    Selector?:
      | React.FC<{ index: number } & Record<string, unknown>>
      | undefined;
  }[];
}) => (
  <Box
    overflowX="scroll"
    as="tr"
    fontSize="md"
    bg={isEven ? "gray.100": 'white'}
    borderBottomWidth={1}
    borderColor="kc.500"
    cursor={isClickable ? 'pointer' : 'inherit'}
    onClick={() => {
      if (onClick) {
        onClick(item);
      }
    }}
  >
    {renderer?.map((selector) => {
      const listPosition = (index || 0) - 1 < 0 ? -1 : (index || 0) - 1;
      return (
        <Box
          key={selector.id}
          as="td"
          p={4}
          whiteSpace="nowrap"
          color="#333333"
          fontSize={rem(14)}
          lineHeight={rem(24)}
        >
          {typeof selector?.selector === 'string' &&
            selector?.selector === 'numbering' &&
            index}

          {item &&
            typeof selector?.selector === 'string' &&
            t(item, selector?.selector).safeObject}
          {item &&
            typeof selector?.selector === 'function' &&
            selector?.selector(item, listPosition)}
          {item && selector?.Selector ? (
            <selector.Selector {...item} index={listPosition} />
          ) : null}
        </Box>
      );
    })}
  </Box>
);

export default TableContent;
