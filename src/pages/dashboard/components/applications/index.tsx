import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import PageHeader from "components/Blocks/Header";
import KCInput from 'components/Atoms/Form/KcInput';
import ClientWrapper from "pages/dashboard/wrapper";

function Application() {
    
    return (
        <ClientWrapper>
            <Box>
                <PageHeader title="Application"/>
                <Grid  templateColumns={{base: 'repeat(1, 1fr)',  md: 'repeat(2, 1fr)' }} gap={12}>
                    <GridItem>
                        <Box  p={6} >
                            <KCInput title='Institution name' subTitle="Institution must be same as  appears on the Registrar General's Certificate" />
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box  p={6} >
                            <KCInput title='Application Type' subTitle="Application must be same as  appears on the Registrar General's Certificate" />
                        </Box>
                    </GridItem>
                </Grid>
                <Flex textAlign={"center"} justify="center" mt={10} fontWeight={600} color="gray.600">Mandatory field*</Flex>
                <Flex align={"center"}>
                    <CustomButton title="Submit Application" color="kc" />
                    <Text fontWeight={600} color="kc.500" ml={6}>*Make payment before submitting the application</Text>
                </Flex>
            </Box>
        </ClientWrapper>
    )
}

export default Application;
