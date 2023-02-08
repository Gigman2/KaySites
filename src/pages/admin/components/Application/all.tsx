import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { CustomButton } from "components/Atoms";
import PageHeader from "components/Blocks/Header/header2";
import Table from "components/Blocks/Table";
import moment from "moment";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoCalendarOutline } from "react-icons/io5";

const tableColumn = () => [
    {
        id: 1,
        name: 'App#',
        selector: 'id',
    },
     {
        id: 1,
        name: 'Application Type',
        selector: 'type',
    },
    {
        id: 2,
        name: 'Institution Name',
        selector: 'institution',
    },
    {
        id: 2,
        name: 'Approval Status',
        selector: 'status',
    },
    {
        id: 2,
        name: 'Payment Status',
        selector: 'paymentStatus',
    },
    {
        id: 3,
        name: 'Date & Time',
        selector: 'createdAt',
    },
    {
        id: 4,
        name: 'Duration',
        selector: 'duration',
    },
    {
        id: 4,
        name: 'Information',
        selector: 'information',
    },
    {
        id: 4,
        name: 'Action',
        selector: 'action',
    }
]

const tableData = () => [
    {   id: 'KAY12232', 
        institution: "Barclays Bank", 
        type: "Application for authorization",
        status: <CustomButton title="approved" color="kc-light" btype="solid" w={24} h={10} py={1} fontWeight={500} rounded="xl" />,
        paymentStatus: <CustomButton title="paid" color="kc-light" btype="solid" w={24} h={10} py={1} fontWeight={500} rounded="xl" />,
        createdAt: moment('2023-1-12 05:25').format('DD MMM, YYYY HH:mm'),
        duration: "2021-2022",
        information: <CustomButton title="Preview" color="kc" btype="solid" w={24} h={10} py={1} fontWeight={500} rounded="xl" />,
        action: <CustomButton title="Action" color="kc" btype="solid" w={24} h={10} py={1} fontWeight={500} rounded="xl" />,
    },
    {   id: 'KAY09893', 
        institution: "Barclays Bank", 
        type: "Application for authorization",
        status: <CustomButton title="approved" color="kc-light" btype="solid" w={24} h={10} py={1} fontWeight={500} rounded="xl" />,
        paymentStatus: <CustomButton title="paid" color="kc-light" btype="solid" w={24} h={10} py={1} fontWeight={500} rounded="xl" />,
        createdAt: moment('2023-1-12 05:25').format('DD MMM, YYYY HH:mm'),
        duration: "2021-2022",
        information: <CustomButton title="Preview" color="kc" btype="solid" w={24} h={10} py={1} fontWeight={500} rounded="xl" />,
        action: <CustomButton title="Action" color="kc" btype="solid" w={24} h={10} py={1} fontWeight={500} rounded="xl" />,
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
                    <Box borderWidth={1} borderColor="kc.500" color="kc.500" rounded={"lg"} p={2}>Filter: All dates</Box>
                    <Flex align={"center"} color="kc.500" >
                        <Flex borderWidth={1} ml={2} borderColor="kc.500" color="kc.500" rounded={"lg"} fontSize={14}>
                            <Box p={2}>Start Date</Box>
                            <Box borderColor="kc.500" borderRightWidth={1} borderLeftWidth={1} p={2}>End Date</Box>
                            <Box p={2}><Icon as={IoCalendarOutline} boxSize={4} /></Box>
                        </Flex>
                    </Flex>
                    <Flex align={"center"} color="kc.500" >
                        <Text fontWeight={600} fontSize={14}>View</Text>
                        <Flex borderWidth={1} ml={2} borderColor="kc.500" color="kc.500" rounded={"lg"} fontSize={14}>
                            <Box p={2}>Start Date</Box>
                            <Box borderColor="kc.500" borderRightWidth={1} borderLeftWidth={1} p={2}>End Date</Box>
                            <Box p={2}><Icon as={IoCalendarOutline} boxSize={4} /></Box>
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

export default AllApplication;