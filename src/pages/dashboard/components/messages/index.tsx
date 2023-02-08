import { Box } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import PageHeader from "components/Blocks/Header";
import Table from "components/Blocks/Table";
import ClientWrapper from "pages/dashboard/wrapper";

function Messages() {
    return (
        <ClientWrapper>
            <Box>
                <PageHeader title="Messages"/>
                <Box rounded={"lg"} px={8} py={12} mt={12}>

                </Box>
            </Box>
        </ClientWrapper>
    )
}

export default Messages;
