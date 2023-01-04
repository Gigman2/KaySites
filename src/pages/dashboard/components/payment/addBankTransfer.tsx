import { Box, Grid, GridItem } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import KCInput from "components/Atoms/Form/KcInput";
import KCSelect from "components/Atoms/Form/KcSelect";
import KCTextarea from "components/Atoms/Form/KcTextarea";

import PageHeader from "components/Blocks/Header";
import { useNavigate } from "react-router-dom";

function AddBankTransfer() {
    const navigate = useNavigate()

    const handleChange = (data: string) => {
        navigate(`/dashboard/payments/${data}`)
    }
    return (
    <Box>
        <PageHeader title="Payment Information">
            <KCSelect options={[
                {key: "add-card", name: "Card Payment"},
                {key: "add-bank-transfer", name: "Bank Transfer"},

            ] || []} placeholder="Payment Type"
            onChange={(item: {name: string; key: string} | string) => handleChange((item as {name: string; key: string})?.key)} 
            />
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
