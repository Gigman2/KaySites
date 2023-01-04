import { Box, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import KCInput from "components/Atoms/Form/KcInput";
import KCInput1 from "components/Atoms/Form/KcInput1";
import KCTextarea from "components/Atoms/Form/KcTextarea";

import PageHeader from "components/Blocks/Header";
import { AiOutlineCaretDown } from "react-icons/ai";

function AddCardPayment() {
    return (
    <Box>
        <PageHeader title="Payment Information">
            <Flex textTransform={"uppercase"} letterSpacing={-0.8} fontSize={14} fontWeight={600}>
                <Text>Payment Type</Text>
                <Icon as={AiOutlineCaretDown} boxSize={6} ml={4  } />
            </Flex>
        </PageHeader>

        <Grid w="100%" templateColumns="repeat(12, 1fr)" columnGap={12}  mt={12}>
            <Box as={GridItem} colSpan={8} mb={8}>
                <KCInput title="Card Number" subTitle="Enter 16-digit card number on the card"/>
            </Box>
            <Box as={GridItem} colSpan={4} mb={8}>
                <KCInput title="Add New Card" subTitle="Enter 3-or-4 digit card number on the card"/>
            </Box>
            <Box as={GridItem} colSpan={8}>
                <Box  mb={8}>
                    <KCInput1 cols={[5, 7]} title="Card Number" subTitle="Enter 16-digit card number on the card"/>
                </Box>
                <Box mb={8}>
                    <KCInput1 cols={[5, 7]} title="Password" subTitle="Enter your dynamic password"/>
                </Box>
                <Box mb={8}>
                    <KCInput title="Application Type" width="50%" />
                </Box>
            </Box>
            <Box as={GridItem} colSpan={4} mb={8}>
                <KCTextarea title="Reference" subTitle="Optionally, add a reference note"/>
            </Box>
            <Box  as={GridItem} colSpan={8}>
                <Box mb={8}>
                    <KCInput title="Amount" width="50%" />
                </Box>
            </Box>
            <Box as={GridItem} colSpan={4}>
                <CustomButton mt={6} btype="solid" color="kc" title="Pay Now"/>
            </Box>
        </Grid>
    </Box>
    )
}

export default AddCardPayment;
