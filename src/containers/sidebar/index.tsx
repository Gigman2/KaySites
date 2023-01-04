import { Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useLayout from "stores/layout";
import { INav } from "utils/interfaces/navs";
import { adminPages, clientPages } from "./constants";

function Sidebar() {
    const { dashboard, currentPage, setCurrentPage } = useLayout(['dashboard', 'currentPage', 'setCurrentPage'])
    const navigate = useNavigate()
    const dashboardRoutes = {
        client: clientPages,
        admin: adminPages
    }

    const handleClick = (item: INav) => {
        setCurrentPage(item.id)
        navigate(item.path)
    }
    return <Box w={dashboard !== null ? "250px" : 0} h="100vh" py={12}>
        {dashboard !== null ? dashboardRoutes[dashboard].map(item => {
        return (
            <Box width={"100%"} key={item.name} 
                py={4} 
                cursor="pointer"
                {...item.id === currentPage ? {bg: 'kc.200', borderRightWidth: 3, borderColor: "kc.500"} : {}}
                _hover={{bg: 'kc.200', borderRightWidth: 3, borderColor: "kc.500"}} 
                onClick={() => handleClick(item)}
                >
                <Flex pl={16} align="center" color="kc.500" gap={4}>
                    <Box w={6} h={5} bg="gray.200" rounded={"md"}></Box>
                    <Text fontSize={14}>{item.name}</Text>
                </Flex>
            </Box>
        )
        }) : null}
    </Box>
}

export default Sidebar;
