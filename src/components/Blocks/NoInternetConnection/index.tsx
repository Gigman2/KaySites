import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import useComponentsStoreSelector from 'stores/component';

const NoInternetConnection = () => {
  // state variable holds the state of the internet connection
  const { isOnline, setIsOnline } = useComponentsStoreSelector([
    'isOnline',
    'setIsOnline',
  ]);

  // On initization set the isOnline state.
  useEffect(() => {
    setIsOnline(navigator.onLine);
  }, [setIsOnline]);

  // event listeners to update the state
  window.addEventListener('online', () => {
    setIsOnline(true);
  });

  window.addEventListener('offline', () => {
    setIsOnline(false);
  });
;

  // if user is online, return the child component else return a custom component

  return (
    <Flex align={'center'} color="white" h={isOnline ? 0 : '48px'} bg="orange.400" display={isOnline ? "none" : "block"}>
      <Flex w="100%" align="center" justify="center">
        No Internet Connection. Please try again later.
      </Flex>
    </Flex>
  );
};

export default NoInternetConnection;
