import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useLayout from "stores/layout";
import { INavs } from "utils/interfaces/navs";
import { adminPages, clientPages } from "./constants";

function Sidebar() {
    const { 
        dashboard, 
        currentPage, 
        setCurrentPage,
        showChildren,
        setShowChildren
    } = useLayout(['dashboard', 'currentPage', 'setCurrentPage', 'showChildren', 'setShowChildren'])
    const navigate = useNavigate()
    const dashboardRoutes = {
        client: clientPages,
        admin: adminPages
    }

    const handleClick = (item: INavs) => {
        setCurrentPage(item.id)
        navigate(item.path)
    }


    return <Box w={dashboard !== null ? "250px" : 0} h="100vh" py={12}>
        {dashboard !== null ? (dashboardRoutes[dashboard] as INavs[]).map((item) => {
        return (
            <Box  position="relative">
                <Box width={"100%"} 
                    py={4} 
                    key={item.name} 
                    cursor="pointer"
                    {...item.id === currentPage ? {bg: 'kc.200', borderRightWidth: 3, borderColor: "kc.500"} : {}}
                    _hover={{bg: 'kc.200', borderRightWidth: 3, borderColor: "kc.500"}} 
                    onClick={() => handleClick(item)}
                    >
                    <Flex pl={16} align="center" color="kc.500" gap={4}>
                        <Flex align={"center"} justify="center" w={6} h={5} rounded={"md"}>
                            {item?.icon && <Icon as={item.icon as any} boxSize={5} />}
                        </Flex>
                        <Text fontSize={14}>{item.name}</Text>
                    </Flex>
                </Box>
                {showChildren && <Box>
                    {item.children && 
                    <Box position={"absolute"} bg="white" left={'200px'} w="220px">
                        {item?.children.map(child =>  <Flex 
                            py={4} 
                            px={4} 
                            fontSize={14} 
                            color="kc.500"
                            cursor={"pointer"}
                            _hover={{bg: 'kc.200', borderRightWidth: 3, borderColor: "kc.500"}} 
                            >{child.name}
                        </Flex>)}
                    </Box>}
                </Box>}
            </Box>
        )
        }) : null}
    </Box>
}

export default Sidebar;
