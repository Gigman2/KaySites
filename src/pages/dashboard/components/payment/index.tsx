import { Box, Text } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import PageHeader from "components/Blocks/Header";
import { useNavigate } from "react-router-dom";
import { pathTo } from "utils/routing";

function Payment() {
    const navigate = useNavigate()

    return (
    <Box>
        <PageHeader title="All Payments"/>

        <Box borderWidth={3} borderColor="kc.500" rounded={"lg"} px={8} py={12} mt={12}>
            <Text color="kc.500">No payment information was found. Click on the button below to begin</Text>
            <Box pt={4}>
                <CustomButton title="Start New Application" 
                    btype="solid" 
                    color="kc-light"  
                    onClick={() => navigate(`${pathTo.addCard}`)}/>
            </Box>
        </Box>
    </Box>
    )
}

export default Payment;
