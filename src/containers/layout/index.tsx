import { Box, Flex } from "@chakra-ui/react";
import Header from "containers/header";
import Sidebar from "containers/sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
    return <Box>
        <Header />
        <Flex>
            <Sidebar type="client"/>
            <Box mt={14} flex={1} px={8}>
                <Outlet />
            </Box>
        </Flex>
    </Box>
}

export default Layout;
