import { Box, Flex } from "@chakra-ui/react";
import Header from "containers/header";
import Sidebar from "containers/sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
    return <Box>
        <Header />
        <Flex>
            <Sidebar />
            <Box mt={14} flex={1} pl={12} pr={14}>
                <Outlet />
            </Box>
        </Flex>
    </Box>
}

export default Layout;
