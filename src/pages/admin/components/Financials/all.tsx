import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import PageHeader from "components/Blocks/Header/header2";
import Table from "components/Blocks/Table";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const tableColumn = () => [
    {
        id: 1,
        name: 'Documents Name',
        selector: 'name',
    },
     {
        id: 1,
        name: 'Description',
        selector: 'description',
    },
    {
        id: 2,
        name: 'Uploaded By',
        selector: 'uploaded',
    },
    {
        id: 2,
        name: 'Date And Time',
        selector: 'datetime',
    },
    {
        id: 2,
        name: 'Download',
        selector: 'download',
    },
    {
        id: 4,
        name: 'Action',
        selector: 'action',
    }
]

const tableData = () => [
    {   name: 'Lorem Ipsum Dolor Sit Amet, Consectetur', 
        description: "Barclays Bank", 
        uploaded: "Robert Grayson",
        datetime: "21st Oct 2022",
        download: 'download',
        action: <CustomButton title="Action" color="kc" btype="solid" w={24} h={10} py={1} fontWeight={500} rounded="xl" />,
    },
    {  name: 'Lorem Ipsum Dolor Sit Amet, Consectetur', 
        description: "Barclays Bank", 
        uploaded: "Robert Grayson",
        datetime: "21st Oct 2022",
        download: 'download',
        action: <CustomButton title="Action" color="kc" btype="solid" w={24} h={10} py={1} fontWeight={500} rounded="xl" />,
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