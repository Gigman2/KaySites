import React from 'react';
import { Box, Flex, Spinner } from '@chakra-ui/react';

const TableHead = ({
  tableHead,
  onLoadingData,
  data,
  loading,
}: {
  loading: boolean;
  data?: unknown[];
  onLoadingData?: boolean;
  tableHead: {
    id?: string | number;
    name: number | string;
  }[];
}) => {
  if (loading) {
    return (
      <Flex
        w="100%"
        position={onLoadingData ? 'absolute' : 'relative'}
        align="center"
        justify="center"
        h={onLoadingData ? '100%' : '60vh'}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="cf.900"
          size="xl"
        />
      </Flex>
    );
  }
  return (
    <Box as="thead" w="100%" bg="kc.500">
      <Box as="tr" w="100%">
        {(data || [])?.length > 0 &&
          tableHead?.map((item) => (
            <Box
              key={item?.id}
              as="th"
              px={4}
              py={6}
              borderBottomWidth={1}
              textAlign="left"
              fontSize="sm"
              fontWeight={500}
              lineHeight={4}
              color=" #fff"
              textTransform="capitalize"
            >
              {item?.name}
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default TableHead;
