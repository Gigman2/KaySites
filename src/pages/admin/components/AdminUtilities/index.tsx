import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import PageHeader from "components/Blocks/Header/header2";
import AdminWrapper from "pages/admin/wrapper";
import { AiFillCaretDown } from 'react-icons/ai';

function Home() {
    return (
        <AdminWrapper>
            <Box>
                <PageHeader title='All Applications'>
                    <Flex color="kc.500" align={"center"}>
                        <Flex columnGap={4} px={4} py={2} rounded={"md"} borderWidth={1} borderColor="kc.500" align={"center"}>
                            <Text>Year: January - December(2022)</Text>
                            <Icon as={AiFillCaretDown}/>
                        </Flex>
                    </Flex>
                </PageHeader>
            </Box>
        </AdminWrapper>
    )
}

export default Home;
