import { Box, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import KCInput from "components/Atoms/Form/KcInput";
import KCTextarea from "components/Atoms/Form/KcTextarea";

import PageHeader from "components/Blocks/Header";
import { AiOutlineCaretDown } from "react-icons/ai";

function AddBankTransfer() {
    return (
    <Box>
        <PageHeader title="Payment Information">
            <Flex textTransform={"uppercase"} letterSpacing={-0.8} fontSize={14} fontWeight={600}>
                <Text>Payment Type</Text>
                <Icon as={AiOutlineCaretDown} boxSize={6} ml={4  } />
            </Flex>
        </PageHeader>

        <Grid w="100%" templateColumns="repeat(12, 1fr)" columnGap={12}  mt={12}>
            <Box as={GridItem} colSpan={6} mb={8}>
                <KCInput title="Full Name" />
            </Box>
            <Box as={GridItem} colSpan={6} mb={8}>
                <KCInput title="Application Type" />
            </Box>
            <Box as={GridItem} colSpan={6} mb={8}>
                <KCInput title="Location" />
            </Box>
            <Box as={GridItem} colSpan={6} mb={8}>
                <KCInput title="Amount" />
            </Box>
            <Box as={GridItem} colSpan={6} mb={8}>
                <KCInput title="Mobile Number" />
            </Box>
            <Box as={GridItem} colSpan={6} mb={8}>
               <KCTextarea title="Reference" subTitle="Optionally, add a reference note" />
            </Box>
        </Grid>
        <Box mb={12}>
            <CustomButton title="Pay Now" btype="solid" color="kc" fontSize={18}/>
        </Box>
    </Box>
    )
}

export default AddBankTransfer;
