import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import Logo from 'assets/images/logo.png'
import {BsBellFill} from "react-icons/bs"
import useLayout from "stores/layout";

function Header() {
    const { 
        dashboard
    } = useLayout([
        'dashboard'
    ])
    return <Box p={4} borderBottomWidth={2} borderColor="kc.500">
        <Box ml={"200px"}>
            <Flex pt={6} justify="space-between" mx={8}>
                <Flex align={"center"}>
                    <Image src={Logo} w={12} mr={2} />
                    <Flex color="kc.500" letterSpacing={-0.5} fontSize={28}>
                        <Text fontWeight={700}>Kay</Text>
                        <Text fontWeight={300} mr={2}>Classified</Text>
                        <Text fontWeight={700} mr={2}> {dashboard === 'admin' ? "Admin" : "User"}</Text>
                        <Text fontWeight={700}>Portal</Text>
                    </Flex>
                </Flex>
                <Flex align={"center"} gap={2}>
                    <Icon as={BsBellFill} color="black" boxSize={3} />
                    <Text fontWeight={600}>Inbox</Text>
                    <Flex w={12} h={12} 
                        fontSize={20} rounded="full" 
                        bg="kc.500" align={"center"} 
                        justify="center" color="white">c</Flex>
                </Flex>
            </Flex>
        </Box>
    </Box>
}

export default Header;
