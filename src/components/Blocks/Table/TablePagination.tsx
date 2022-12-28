import React from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { DOTS } from 'hooks/usePagination';
import { rem } from 'helpers/misc';
import DirectionButton from './shared/DirectionButton';
import TablePageButton from './shared/TablePaginationButton';
import usePagination from './hooks/usePagination';
import { ISearchResponsePayload } from '../../../utils/interfaces/utils';

const TablePagination = ({
  setCurrentPage,
  pageData,
}: {
  pageData: ISearchResponsePayload<unknown>['pageData'];
  setCurrentPage: (d?: unknown) => void;
}) => {
  const {
    totalPages,
    selectedItem,
    setSelectedItem,
    prev,
    next,
    handleClick,
    paginationRange,
    isDirty,
  } = usePagination({
    setCurrentPage,
    pageData,
  });

  if (isDirty) {
    return null;
  }
  return (
    <Box mt={{ md: 14 }} mb={{ md: 3 }} p={{ md: 3 }} w="100%">
      <Flex align="center" justify="space-between" direction="row" w="100%">
        <Box>
          <Text
            fontWeight={400}
            color="#333333"
            lineHeight={{ ...rem(18) }}
            fontSize={{ ...rem(12) }}
          >
            Showing {selectedItem} of {totalPages}
          </Text>
        </Box>
        <HStack spacing={{ ...rem(8) }}>
          <DirectionButton
            title="Prev"
            selectedItem={selectedItem}
            onClick={prev}
          />
          {paginationRange?.map((pageNumber) => {
            if (pageNumber === DOTS) {
              return (
                <Box p={3} key={pageNumber}>
                  <Text
                    fontWeight={400}
                    lineHeight={{ ...rem(20) }}
                    fontSize={{ ...rem(15) }}
                    color="#697070"
                  >
                    &#8230;
                  </Text>
                </Box>
              );
            }
            return (
              <Box key={pageNumber}>
                <TablePageButton
                  setSelected={setSelectedItem}
                  selected={selectedItem}
                  number={pageNumber as number}
                  {...{
                    handleClick,
                    pageData,
                  }}
                />
              </Box>
            );
          })}
          <DirectionButton
            title="Next"
            selectedItem={selectedItem}
            onClick={next}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default TablePagination;
