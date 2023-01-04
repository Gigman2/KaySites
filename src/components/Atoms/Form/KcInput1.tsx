import { Box, Flex, Grid, GridItem, Input, Text } from "@chakra-ui/react";

function KCInput({title, subTitle, cols}: {title: string, subTitle?: string, cols: number[]}) {
    return (
    <Grid templateColumns="repeat(12, 1fr)" w="100%">
        <Flex align={"center"} as={GridItem} colSpan={cols[0]}>
            <Box>
                <Text color={"kc.500"} fontWeight={700} fontSize={18}>{title}</Text>
                <Text color="gray.400" fontSize={14}>{subTitle}</Text>
            </Box>
        </Flex>
        <Box as={GridItem} colSpan={cols[1]}>
            <Input borderColor="kc.500" borderWidth={2} mt={4} bg="gray.100" h={14} 
                _active={{outline: "none", borderColor: "kc.500"}} 
                _hover={{outline: "none", borderColor: "kc.500"}}
                _focus={{outline: "none", borderColor: "kc.500"}}
            />
        </Box>
    </Grid>
    )
}

export default KCInput;
