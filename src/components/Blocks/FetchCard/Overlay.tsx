import React from 'react';
import { Box, Flex, Text, Spinner, Slide } from '@chakra-ui/react';

const Overlay = ({
  text,
  loading = true,
}: {
  text?: string;
  loading?: boolean;
}) => (
  <Slide direction="top" in={true} style={{ zIndex: 100 }}>
    <Box backdropBlur="2xl" pos="fixed" width="100vw" bg="transparent">
      <Flex
        direction="column"
        align="center"
        backdropFilter="blur(8px)"
        justify="center"
        h="100vh"
      >
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="cf.500"
            size="xl"
          />
        )}
        {text && <Text className="loading-text loading-text-b">{text}</Text>}
      </Flex>
    </Box>
  </Slide>
);

export default Overlay;
