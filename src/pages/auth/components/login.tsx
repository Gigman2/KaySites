import { Box, Grid, GridItem, } from '@chakra-ui/react';
import LoginWelcome from 'assets/images/KC Welcome LogIn.png'
import AuthForm from './authForm';

function Login() {
  return <Box>
    <Grid  templateColumns={{ md: 'repeat(12, 1fr)' }}  h="100vh" 
      bgImage={`url('${LoginWelcome}')`} bgPosition="250% 50%">
      <GridItem colSpan={7} bg="transparent"></GridItem>
      <GridItem colSpan={5} bg="white">
        <AuthForm />
      </GridItem>
    </Grid>
  </Box>;
}

export default Login;
