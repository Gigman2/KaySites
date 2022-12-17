import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import { IoSearchOutline } from "react-icons/io5";

function Application() {
    return (
    <Box>
        <Flex justify="space-between" w="100%" color="kc.500" borderBottomWidth={2} borderColor="kc.500" pb={6}>
            <Text textTransform={"uppercase"} letterSpacing={-0.8} fontSize={20} fontWeight={600}>All Payments</Text>
            <Flex gap={2}>
                <Icon as={IoSearchOutline} boxSize={6} />
                <Text>Search</Text>
            </Flex>
        </Flex>

        <Box borderWidth={3} borderColor="kc.500" rounded={"lg"} px={8} py={12} mt={12}>
            <Text color="kc.500">No payment information was found. Click on the button below to begin</Text>
            <Box pt={4}>
                <CustomButton title="Start New Application" btype="solid" color="kc-light" />
            </Box>
        </Box>
    </Box>
    )
}

export default Application;
