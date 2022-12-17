import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

function Application() {
    return (
    <Box>
        <Flex justify="space-between" w="100%" color="kc.500" borderBottomWidth={2} borderColor="kc.500" pb={6}>
            <Text textTransform={"uppercase"} letterSpacing={-0.8} fontSize={20} fontWeight={600}>Application</Text>
            <Flex gap={2}>
                <Icon as={IoSearchOutline} boxSize={6} />
                <Text>Search</Text>
            </Flex>
        </Flex>
    </Box>
    )
}

export default Application;
