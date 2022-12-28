import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import PageHeader from "components/Blocks/Header";

function Application() {
    return (
    <Box>
        <PageHeader title="Application"/>
        <Grid  templateColumns={{base: 'repeat(1, 1fr)',  md: 'repeat(2, 1fr)' }} gap={12}>
            <GridItem>
                <Box p={6}>
                    <Text fontWeight={600} color="kc.500">Institution name*</Text>
                </Box>
                <Box  p={6} bg={'kc.100'}>
                    <Text fontSize={13} color="gray.500">Institution must be same as  appears on the Registrar General's Certificate</Text>
                </Box>
            </GridItem>
            <GridItem>
                <Box p={6}>
                    <Text fontWeight={600} color="kc.500">Application Type*</Text>
                </Box>
                <Box  p={6} bg={'kc.100'}>
                    <Text fontSize={13} color="gray.500">Application must be same as  appears on the Registrar General's Certificate</Text>
                </Box>
            </GridItem>
        </Grid>
        <Flex textAlign={"center"} justify="center" mt={10} fontWeight={600} color="gray.600">Mandatory field*</Flex>
        <Flex align={"center"}>
            <CustomButton title="Submit Application" color="kc" />
            <Text fontWeight={600} color="kc.500" ml={6}>*Make payment before submitting the application</Text>
        </Flex>
    </Box>
    )
}

export default Application;
