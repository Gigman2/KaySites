import { Box, Grid, GridItem, } from '@chakra-ui/react';
import SignupWelcome from 'assets/images/KC Welcome Screen.png'
import AuthForm from './authForm';

function Login() {
  return <Box>
    <Box w="100vw" h="100vh"   bgImage={`url('${SignupWelcome}')`} bgSize="cover">
        <Box w={'600px'} mx="auto" pt={6}>
            <AuthForm invertColors={true} isSignUpForm={true} />
        </Box>
    </Box>
  </Box>;
}

export default Login;
