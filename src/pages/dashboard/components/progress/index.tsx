import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import PageHeader from "components/Blocks/Header";

function ApplicationProgress() {
    return (
    <Box>
        <PageHeader title="Application Progress"/>

        <Grid templateColumns={{ md: 'repeat(12, 1fr)' }} my={12}>
            <GridItem colSpan={4} mt={12}>
                <Flex direction={'column'}>
                    <Box pos={"relative"} zIndex={3}>
                        <Flex align={"center"} zIndex={2}>
                            <Box rounded={"full"} h={16} w={16} bg="kc-light.500"></Box>
                            <Box flex={1} ml={4}>
                                <Text color={"gray.600"} fontWeight={600} fontSize={14}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                                <Text fontSize={12} color="gray.300">09/08/2022 at 13:09</Text>
                            </Box>
                        </Flex>
                        <Box pos={"absolute"} h={16} w={'2px'} bg="gray.400" ml={8} zIndex={1} mt={-1}></Box>
                    </Box>
                    <Box pos={"relative"} zIndex={3} mt={12}>
                        <Flex align={"center"} zIndex={2}>
                            <Box rounded={"full"} h={16} w={16} bg="kc-light.500"></Box>
                            <Box flex={1} ml={4}>
                                <Text color={"gray.600"} fontWeight={600} fontSize={14}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                                <Text fontSize={12} color="gray.300">09/08/2022 at 13:09</Text>
                            </Box>
                        </Flex>
                        <Box pos={"absolute"} h={16} w={'2px'} bg="gray.400" ml={8} zIndex={1}></Box>
                    </Box>
                    <Box pos={"relative"} zIndex={3} mt={12}>
                        <Flex align={"center"} zIndex={2}>
                            <Box rounded={"full"} h={16} w={16} bg="kc-light.500"></Box>
                            <Box flex={1} ml={4}>
                                <Text color={"gray.600"} fontWeight={600} fontSize={14}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                                <Text fontSize={12} color="gray.300">09/08/2022 at 13:09</Text>
                            </Box>
                        </Flex>
                        <Box pos={"absolute"} h={16} w={'2px'} bg="gray.400" ml={8} zIndex={1}></Box>
                    </Box>
                    <Box pos={"relative"} zIndex={3} mt={12}>
                        <Flex align={"center"} zIndex={2}>
                            <Box rounded={"full"} h={16} w={16} bg="kc-light.500"></Box>
                            <Box flex={1} ml={4}>
                                <Text color={"gray.600"} fontWeight={600} fontSize={14}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                                <Text fontSize={12} color="gray.300">09/08/2022 at 13:09</Text>
                            </Box>
                        </Flex>
                        <Box pos={"absolute"} h={16} w={'2px'} bg="gray.400" ml={8} zIndex={1}></Box>
                    </Box>
                    <Box pos={"relative"} zIndex={3} mt={12}>
                        <Flex align={"center"} zIndex={2}>
                            <Box rounded={"full"} h={16} w={16} bg="kc-light.500"></Box>
                            <Box flex={1} ml={4}>
                                <Text color={"gray.600"} fontWeight={600} fontSize={14}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                                <Text fontSize={12} color="gray.300">09/08/2022 at 13:09</Text>
                            </Box>
                        </Flex>
                        {/* <Box pos={"absolute"} h={16} w={'2px'} bg="gray.400" ml={8} zIndex={1}></Box> */}
                    </Box>
                </Flex>
            </GridItem>
            <GridItem colSpan={8} h="100%">
                <Box w="100%" h="100%" bg={"gray.300"}></Box>
            </GridItem>
        </Grid>
    </Box>
    )
}

export default ApplicationProgress;
