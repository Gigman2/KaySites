import { Box, Grid, GridItem, } from '@chakra-ui/react';
import LoginWelcome from 'assets/images/login-2.png'
import AuthForm from './authForm';

function Login() {
  return <Box>
    <Box w="100vw" h="100vh"  bgImage={`url('${LoginWelcome}')`} bgSize="cover">
      <Box pos="absolute" zIndex={2} bg="rgba(0, 0,0, 0.7)" w="100%" h="100%"></Box>
      <Box pos="relative" zIndex={3} w={'600px'} mx="auto" pt={6}>
        <AuthForm invertColors={true} isSignUpForm={false} />
      </Box>
    </Box>
  </Box>;
}

export default Login;
