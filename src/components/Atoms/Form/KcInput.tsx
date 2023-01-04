import { Box, Input, Text, LayoutProps } from "@chakra-ui/react";

function KCInput({title, subTitle, width}: {title: string, subTitle?: string; width?:  LayoutProps["w"]}) {
    return (
    <Box w={width}>
        <Text color={"kc.500"} fontWeight={700} fontSize={18}>{title}</Text>
        <Text color="gray.400" fontSize={14}>{subTitle}</Text>
        <Input borderColor="kc.500" borderWidth={2} mt={4} bg="gray.100" h={14} 
            _active={{outline: "none", borderColor: "kc.500"}} 
            _hover={{outline: "none", borderColor: "kc.500"}}
            _focus={{outline: "none", borderColor: "kc.500"}}
        />
    </Box>
    )
}

export default KCInput;
