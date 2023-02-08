import { Box, Flex, Icon, Image, Input, Link, Text } from '@chakra-ui/react';
import Logo from 'assets/images/logo.png'
import { FiAtSign } from 'react-icons/fi'
import { TfiLock } from 'react-icons/tfi'
import { CustomButton } from 'components/Atoms';
import GLogo from 'assets/images/G__Logo.svg.png'
import { Link as RLink} from 'react-router-dom'

const AuthForm: React.FC<{invertColors?: boolean; isSignUpForm?: boolean}> = ({invertColors, isSignUpForm}) => {
  return <Flex h="100%" w="100%" flexDirection={"column"} align="center" justify={"center"} px={20}>
          <Box>
            <Flex justify={"center"}>
              <Image src={Logo} w={12} />
            </Flex>
            <Text fontSize={56} textAlign="center" color={invertColors? "white" :"kc.500"} fontWeight={600}>Welcome!</Text>
            <Text fontSize={12} color={invertColors? "white" :"kc.500"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Molestias eum optio facilis repudiandae omnis ut quae, 
              unde aliquid reprehenderit, officia consequuntur dolorem.
            </Text>

            <Box mt={6}>
              <Box rounded={'2xl'} borderWidth={2} borderColor={invertColors? "white" :"kc.500"} px={6} py={1}>
                <Box color="gray.300">Email</Box>
                <Flex>
                  <Input outline={"none"}  borderWidth={0} 
                    _focus={{outline: 'none', borderWidth: 0}} 
                    _active={{outline: 'none', borderWidth: 0}}
                  />
                  <Icon as={FiAtSign} color="gray.300" fontSize={24} />
                </Flex>
              </Box>
            </Box>
            <Box mt={6}>
              <Box rounded={'2xl'} borderWidth={2} borderColor={invertColors? "white" :"kc.500"} px={6} py={1}>
                <Box color="gray.300">Password</Box>
                <Flex>
                  <Input outline={"none"} borderWidth={0} 
                  _focus={{outline: 'none', borderWidth: 0}} 
                  _active={{outline: 'none', borderWidth: 0}}
                  />
                  <Icon as={TfiLock} color="gray.300" fontSize={24} />
                </Flex>
              </Box>
            </Box>
            <Flex w="100%" align={"center"} justify="space-between" px={4} mt={3}>
              <Text color="gray.400" fontSize={10}>Remember Me</Text>
              <Text color={invertColors? "white" :"kc.500"} fontSize={16} letterSpacing={-0.8} fontWeight={600}>Recovery Password</Text>
            </Flex>

            <CustomButton btype='solid' color="kc" title={isSignUpForm ? "Sign Up" : "Login"} rounded={"xl"} w="100%" mt={8} invert={invertColors ? 'yes': 'no'}/>
            <Flex justify={"center"} mt={4}>
              <Flex align={"center"} gap={1} mt={4}>
                <Box w={6} h={6} rounded="full" >
                  <Image src={GLogo} w="100%" />
                </Box>
                <Text fontWeight={600} color={invertColors? "white" :"kc.500"}>{isSignUpForm ? 'Sign up' : 'Sign in'} with</Text>
                <Text fontSize={18} color="gray.400">Google</Text>
              </Flex>
            </Flex>

            <Flex justify={"center"} width={"100%"} mt={12}>
              <Flex align={"center"} gap={1}>
                {isSignUpForm ? <>
                  <Text color={"gray.400"} fontSize={14}>Already have an account ?</Text>
                  <RLink to={'/login'}>
                    <Text color={invertColors? "white" :"kc.500"} fontSize={14} fontWeight="bold">Sign In</Text>
                  </RLink>
                </> : <>
                  <Text color={"gray.400"} fontSize={14}>Do you have an account yet?</Text>
                  <RLink to={'/signup'}>
                    <Text color={invertColors? "white" :"kc.500"} fontSize={14} fontWeight="bold">Sign Up</Text>
                  </RLink>
                </>}
              </Flex>
            </Flex>
            <Flex justify={"center"} mt={5}>
              <Link href="https://kayclassified.com/">
                <Text color={invertColors? "white" :"kc.500"} fontSize={14} fontWeight="bold">Go Back Home</Text>
              </Link>
            </Flex>
          </Box>
        </Flex>;
}

export default AuthForm;
