import { Box } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import PageHeader from "components/Blocks/Header";
import Table from "components/Blocks/Table";
import ClientWrapper from "pages/dashboard/wrapper";

const tableColumn = () => [
    {
        id: 1,
        name: '#',
        selector: 'id',
    },
    {
        id: 2,
        name: 'Document Name',
        selector: 'name',
    },
    {
        id: 3,
        name: 'Description',
        selector: 'description',
    },
    {
        id: 4,
        name: 'Action',
        selector: 'action',
    }
]

const tableData = () => [
    {   id: 1, 
        name: "Lorem Ipsum Dolor Sit Amet, Consectetur".toUpperCase(), 
        description: "-",
        action: <CustomButton title="Download" color="kc-light" btype="solid" h={10} py={4} fontWeight={500} rounded="xl" />
    },
    {   id: 2, 
        name: "Lorem Ipsum Dolor Sit Amet, Consectetur".toUpperCase(), 
        description: "-",
        action: <CustomButton title="Download" color="kc-light" btype="solid" h={10} py={4} fontWeight={500} rounded="xl" />
    }
]

function Application() {
    return (
        <ClientWrapper>
            <Box>
                <PageHeader title="Document Library"/>
                <Box rounded={"lg"} px={8} py={12} mt={12}>
                    <Table
                        data={tableData()}
                        columns={tableColumn()}
                        title="Hello"
                    />
                </Box>
            </Box>
        </ClientWrapper>
    )
}

export default Application;
