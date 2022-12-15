import { Box, Flex } from "@chakra-ui/react";
import Header from "containers/header";
import Sidebar from "containers/sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
    return <Box>
        <Header />
        <Flex>
            <Sidebar type="client"/>
            <Outlet />
        </Flex>
    </Box>
}

export default Layout;
