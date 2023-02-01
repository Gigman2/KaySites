import {useEffect} from 'react'
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import PageHeader from "components/Blocks/Header/header2";
import useLayout from "stores/layout";
import { CustomButton } from 'components/Atoms';

function Home() {
    const { setDashboard } = useLayout(['setDashboard'])

    useEffect(() => {
        setDashboard('admin')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (
    <Box>
        <PageHeader title='Reports'>
            <Flex color="kc.500" align={"center"}>
                <Text fontWeight={600} fontSize={14} mr={6}>Filter by Date</Text>
                <Flex columnGap={4}>
                    <Box>
                        <Input color="kc.500" type={"date"} w={52} borderWidth={1} borderColor={"kc.500"}/>
                    </Box>
                    <Box>
                        <Input color="kc.500" type={"date"} w={52} borderWidth={1} borderColor={"kc.500"}/>
                    </Box>
                    <Box>
                        <CustomButton title="Generate new report" 
                            color="kc" btype='solid' 
                            py={1}
                            h={10}
                            fontSize={14} 
                            fontWeight={500}
                        />
                    </Box>
                </Flex>
            </Flex>
        </PageHeader>
    </Box>
    )
}

export default Home;
