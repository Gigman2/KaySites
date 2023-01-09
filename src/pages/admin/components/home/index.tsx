import {useEffect} from 'react'
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import PageHeader from "components/Blocks/Header/header2";
import useLayout from "stores/layout";

function Home() {
    const { setDashboard } = useLayout(['setDashboard'])

    useEffect(() => {
        setDashboard('admin')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (
    <Box>
        <PageHeader title='Reports'></PageHeader>
    </Box>
    )
}

export default Home;
