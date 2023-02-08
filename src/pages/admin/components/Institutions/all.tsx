import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import PageHeader from "components/Blocks/Header/header2";
import Table from "components/Blocks/Table";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const tableColumn = () => [
    {
        id: 1,
        name: 'Inst. Name',
        selector: 'institutionName',
    },
     {
        id: 2,
        name: 'Type of institution',
        selector: 'type',
    },
    {
        id: 3,
        name: 'License Id',
        selector: 'license',
    },
    {
        id: 4,
        name: 'Region',
        selector: 'region',
    },
    {
        id: 5,
        name: 'Status',
        selector: 'status',
    },
        {
        id: 6,
        name: 'Username',
        selector: 'username',
    },
        {
        id: 7,
        name: 'Date & Time Added',
        selector: 'datetime',
    },
        {
        id: 8,
        name: 'Year',
        selector: 'year',
    },
    {
        id: 9,
        name: 'Info',
        selector: 'action',
    }
]

const tableData = () => [
    {   institutionName: 'EcoBank', 
        type: "Private Company", 
        license: "N/A",
        region: "Accra",
        status: 'Existing Company',
        username: 'John Doe',
        datetime: 'Today at 6:00 am',
        year: '2021-2022',
        action: <CustomButton title="Options" color="kc" btype="solid" w={24} h={10} py={1} fontWeight={500} rounded="xl" />,
    },
    {   institutionName: 'EcoBank', 
        type: "Private Company", 
        license: "N/A",
        region: "Accra",
        status: 'Existing Company',
        username: 'John Doe',
        datetime: 'Today at 6:00 am',
        year: '2021-2022',
        action: <CustomButton title="Options" color="kc" btype="solid" w={24} h={10} py={1} fontWeight={500} rounded="xl" />,
    },
]

function AllDocuments() {
    return (
        <Box>
                <PageHeader title='All Applications'>
                    <Flex color="kc.500" align={"center"}>
                        <Flex columnGap={4} px={4} py={2} rounded={"md"} borderWidth={1} borderColor="kc.500" align={"center"}>
                            <Text>Year: January - December(2022)</Text>
                            <Icon as={AiFillCaretDown}/>
                        </Flex>
                    </Flex>
                </PageHeader>
                <Flex align={"center"} mt={4} justify="space-between">
                    <Flex>
                        <Flex align={"center"} color="kc.500">
                            <Text fontWeight={600} fontSize={14}>Show</Text>
                            <Box rounded={"md"} mx={2} p={2} borderWidth={1} borderColor="kc.500">12</Box>
                            <Text fontWeight={600} fontSize={14}>entries</Text>
                        </Flex>
                        <Flex borderWidth={1} borderColor="kc.500" color="kc.500" rounded={"lg"} ml={4} p={2} w={"250px"} align="center" justify={"space-between"}>
                            <Text>Newest</Text>
                            <Icon as={AiFillCaretDown} />
                        </Flex>
                    </Flex>
                    <Flex align={"center"} color="kc.500">
                        <Icon as={BiSearch} boxSize={6} mr={1} />
                        <Text fontWeight={600} fontSize={14}>Search</Text>
                    </Flex>
                </Flex>
                <Box  mt={6}>
                    <Table
                        data={tableData()}
                        columns={tableColumn()}
                        title="Hello"
                    />
                </Box>
            </Box>
    )
}

export default AllDocuments;