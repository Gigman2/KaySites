import { Box, Grid, GridItem } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import KCInput from "components/Atoms/Form/KcInput";
import KCInput1 from "components/Atoms/Form/KcInput1";
import KCSelect from "components/Atoms/Form/KcSelect";
import KCTextarea from "components/Atoms/Form/KcTextarea";

import PageHeader from "components/Blocks/Header";
import ClientWrapper from "pages/dashboard/wrapper";
import { useNavigate } from "react-router-dom";

function AddCardPayment() {
    const navigate = useNavigate()

    const handleChange = (data: string) => {
        navigate(`/dashboard/payments/${data}`)
    }
    return (
        <ClientWrapper>
            <Box>
                <PageHeader title="Payment Information">
                    <KCSelect options={[
                        {key: "add-card", name: "Card Payment"},
                        {key: "add-bank-transfer", name: "Bank Transfer"},

                    ] || []} placeholder="Payment Type"
                    onChange={(item: {name: string; key: string} | string) => handleChange((item as {name: string; key: string})?.key)} />
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
        </ClientWrapper>
    )
}

export default AddCardPayment;
