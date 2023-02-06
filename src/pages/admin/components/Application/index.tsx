import {useEffect} from 'react'
import { Box, Flex, Grid, GridItem, Icon, Input, Text } from "@chakra-ui/react";
import PageHeader from "components/Blocks/Header/header2";
import useLayout from "stores/layout";
import { CustomButton } from 'components/Atoms';
import DashboardCard from 'components/Blocks/DashboardCard';
import { AiFillCaretDown } from 'react-icons/ai';

function Home() {
    const { setDashboard } = useLayout(['setDashboard'])

    useEffect(() => {
        setDashboard('admin')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (
    <Box>
        <PageHeader title='All Applications'>
            <Flex color="kc.500" align={"center"}>
                <Flex columnGap={4} px={4} py={2} rounded={"md"} borderWidth={1} borderColor="kc.500" align={"center"}>
                    <Text>Year: January - December(2022)</Text>
                    <Icon as={AiFillCaretDown}/>
                </Flex>
            </Flex>
        </PageHeader>
       <Box maxH={"100%"} >
            <Grid borderBottomWidth={1} borderColor="kc.500" templateColumns={{ md: 'repeat(4, 1fr)' }}>
            <Box as={GridItem}>
                <DashboardCard title='Total number of search done' subtext='Authorization' value={30} even={true}/>
            </Box>
            <Box as={GridItem}>
                <DashboardCard title="Institution not registered with Registrar General's Department" subtext='Authorization' value={10} />
            </Box>
            <Box as={GridItem}>
                <DashboardCard 
                    title="Total number of all applicants" 
                    subtext='Letter of introduction, Authorization, Notice of intent, Expression of interest' 
                    value={60} 
                    even={true}
                />
            </Box>
            <Box as={GridItem}>
                <DashboardCard 
                    title="Total number of all submitted applications" 
                    subtext='Letter of introduction, Authorization, Notice of intent, Expression of interest' 
                    value={18} 
                />
            </Box>
            </Grid>
            <Grid borderBottomWidth={1} borderColor="kc.500" templateColumns={{ md: 'repeat(4, 1fr)' }} p={0} m={0}>
                <Box as={GridItem}>
                    <DashboardCard title='Total number of unsubmitted applications' subtext='Authorization' value={50} />
                </Box>
                <Box as={GridItem}>
                    <DashboardCard title="Applications requiring background search" subtext='Authorization' value={30} even={true}/>
                </Box>
                <Box as={GridItem}>
                    <DashboardCard 
                        title="Pending Applications" 
                        subtext='Letter of introduction, Authorization, Notice of intent, Expression of interest' 
                        value={2} 
                    />
                </Box>
                <Box as={GridItem}>
                    <DashboardCard 
                        title="Approved applications" 
                        subtext='Letter of introduction, Authorization, Notice of intent, Expression of interest' 
                        value={13}
                        even={true} 
                    />
                </Box>
            </Grid>
            <Grid borderBottomWidth={1} borderColor="kc.500" templateColumns={{ md: 'repeat(4, 1fr)' }} p={0} m={0}>
                <Box as={GridItem}>
                    <DashboardCard title='Total number of unsubmitted applications' subtext='Authorization' value={50} even={true}/>
                </Box>
                <Box as={GridItem}>
                    <DashboardCard title="Applications requiring background search" subtext='Authorization' value={30} />
                </Box>
                <Box as={GridItem}>
                    <DashboardCard 
                        title="Pending Applications" 
                        subtext='Letter of introduction, Authorization, Notice of intent, Expression of interest' 
                        value={2} 
                        even={true}
                    />
                </Box>
                <Box as={GridItem}>
                    <DashboardCard 
                        title="Approved applications" 
                        subtext='Letter of introduction, Authorization, Notice of intent, Expression of interest' 
                        value={13} 
                    />
                </Box>
            </Grid>
            <Grid borderBottomWidth={1} borderColor="kc.500" templateColumns={{ md: 'repeat(4, 1fr)' }} p={0} m={0}>
                <Box as={GridItem}>
                    <DashboardCard title='Total number of unsubmitted applications' subtext='Authorization' value={50} />
                </Box>
                <Box as={GridItem}>
                    <DashboardCard title="Applications requiring background search" subtext='Authorization' value={30}even={true} />
                </Box>
                <Box as={GridItem}>
                    <DashboardCard 
                        title="Pending Applications" 
                        subtext='Letter of introduction, Authorization, Notice of intent, Expression of interest' 
                        value={2} 
                    />
                </Box>
                <Box as={GridItem}>
                    <DashboardCard 
                        title="Approved applications" 
                        subtext='Letter of introduction, Authorization, Notice of intent, Expression of interest' 
                        value={13} 
                        even={true}
                    />
                </Box>
            </Grid>
       </Box>
    </Box>
    )
}

export default Home;
