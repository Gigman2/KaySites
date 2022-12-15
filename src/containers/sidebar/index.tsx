import { Box, Flex, Text } from "@chakra-ui/react";
import { adminPages, clientPages } from "./constants";

function Sidebar({type}: {type: string}) {
    const dashboardRoutes = {
        client: clientPages,
        admin: adminPages
    }
    return <Box w="250px" h="100vh" py={12}>

        {dashboardRoutes[type].map(item => {
        return (
            <Box width={"100%"} key={item.name} 
                py={4} _hover={{bg: 'kc.a', borderRightWidth: 3, borderColor: "kc.500"}} 
                cursor="pointer">
                <Flex pl={16} align="center" color="kc.500" gap={4}>
                    <Box w={6} h={5} bg="gray.200" rounded={"md"}></Box>
                    <Text fontSize={14}>{item.name}</Text>
                </Flex>
            </Box>
        )
        })}
    </Box>
}

export default Sidebar;
