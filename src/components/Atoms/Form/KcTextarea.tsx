import { Box, Text, LayoutProps, Textarea } from "@chakra-ui/react";

function KCTextarea({title, subTitle, width}: {title: string, subTitle?: string; width?:  LayoutProps["w"]}) {
    return (
    <Box w={width}>
        <Text color={"kc.500"} fontWeight={700} fontSize={18}>{title}</Text>
        <Text color="gray.400" fontSize={14}>{subTitle}</Text>
        <Textarea borderColor="kc.500" borderWidth={2} mt={4} bg="gray.100" h={64} />
    </Box>
    )
}

export default KCTextarea;
