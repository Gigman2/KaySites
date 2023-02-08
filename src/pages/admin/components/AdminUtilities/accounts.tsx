import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import PageHeader from "components/Blocks/Header/header2";
import Table from "components/Blocks/Table";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const tableColumn = () => [
    {
        id: 1,
        name: 'User ID',
        selector: 'user',
    },
     {
        id: 1,
        name: 'UserType',
        selector: 'userType',
    },
    {
        id: 2,
        name: 'Title',
        selector: 'title',
    },
    {
        id: 3,
        name: 'First Name',
        selector: 'firstName',
    },
    {
        id: 4,
        name: 'Role',
        selector: 'role',
    },
    {
        id: 5,
        name: 'Email',
        selector: 'email',
    },
    {
        id: 6,
        name: 'Contact Number',
        selector: 'phone',
    },
    {
        id: 7,
        name: 'Active Status',
        selector: 'status'
    },
    {
        id: 8,
        name: 'Action',
        selector: 'action',
    }
]

const tableData = () => [
    {   user: 'KAY12232', 
        userType: "Super Admin", 
        title: "Dr",
        firstName: "Gabriel",
        role: "IT",
        email: "kojoaeric@gmail.com",
        phone: "0502960152",
        status: "Active",
        action: <CustomButton title="More" color="kc-light" btype="solid" w={24} h={10} py={1} fontWeight={500} rounded="xl" />,
    },
    {   user: 'KAY12232', 
        userType: "Super Admin", 
        title: "Dr",
        firstName: "Gabriel",
        role: "IT",
        email: "kojoaeric@gmail.com",
        phone: "0502960152",
        status: "Active",
        action: <CustomButton title="More" color="kc-light" btype="solid" w={24} h={10} py={1} fontWeight={500} rounded="xl" />,
    },
]

function AllApplication() {
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
                    <Flex align={"center"} color="kc.500">
                        <Text fontWeight={600} fontSize={14}>Show</Text>
                        <Box rounded={"md"} mx={2} p={2} borderWidth={1} borderColor="kc.500">12</Box>
                        <Text fontWeight={600} fontSize={14}>entries</Text>
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

export default AllApplication;