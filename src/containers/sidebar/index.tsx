import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLayout from "stores/layout";
import { INavs } from "utils/interfaces/navs";
import { adminPages, clientPages } from "./constants";

function Sidebar() {
    const { 
        dashboard, currentPage, 
        setCurrentPage, showChildren,
        setShowChildren, sidebarWidth,
        setSidebarWidth
    } = useLayout([
        'dashboard', 'currentPage', 
        'setCurrentPage', 'showChildren', 
        'setShowChildren', 'sidebarWidth',
        'setSidebarWidth'
    ])
    const navigate = useNavigate()
    const dashboardRoutes = {
        client: clientPages,
        admin: adminPages
    }

    const handleClick = (item: INavs) => {
        setCurrentPage(item.id)
        navigate(item.path)
        if(item.children && item.id === currentPage){
            setShowChildren(!showChildren)
        }else {
            setShowChildren(true)
        }
    }

    useEffect(() => {
        setSidebarWidth(0)
        if(dashboard === 'admin'){
            if(showChildren && currentPage !== 1){
                setSidebarWidth(420)
            } else {
                setSidebarWidth(220)
            }
        } else if(dashboard === 'client'){
            setSidebarWidth(250)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showChildren, dashboard])

    useEffect(() => {}, [])
    return <Box w={dashboard !== null ? `${sidebarWidth}px` : 0} h="100vh" py={12}>
        {dashboard !== null ? (dashboardRoutes[dashboard] as INavs[]).map((item) => {
        return (
            <Box>
                <Box width={"100%"} position="relative">
                    <Box width={dashboard === 'admin' ?"220px" : "250px"} 
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
                    {(showChildren && item.id === currentPage) && <Box>
                    {item.children && 
                        <Box position={"absolute"} bg="white" left={'220px'} w="220px" top={'0px'} zIndex={100}>
                            {item?.children.map(child =>  <Flex 
                                py={4} 
                                px={4} 
                                fontSize={14} 
                                color="kc.500"
                                cursor={"pointer"}
                                _hover={{bg: 'kc.200', borderRightWidth: 3, borderColor: "kc.500"}} 
                                onClick={() => child.path && navigate(`${item.path}/${child.path}`)}
                                >{child.name}
                            </Flex>)}
                        </Box>}
                    </Box>}
                </Box>
            </Box>
        )
        }) : null}
    </Box>
}

export default Sidebar;
