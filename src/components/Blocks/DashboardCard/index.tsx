import React from 'react';
import {
  Box, Flex
} from '@chakra-ui/react';

interface IFetchCardProps {
    title: string
    subtext: string
    value: number
    even?: boolean
}

const DashboardCard: React.FC<IFetchCardProps> = ({
  title,
  subtext,
  value,
  even
}) => (
    <Flex justifyContent={"space-between"} padding={4} color={"kc.500"} minH={32} bg={even ? "kc.100": ''}>
        <Box>
            <Box fontWeight={"bold"} fontSize={14}>{title}</Box>
            <Box fontSize={12}>{subtext}</Box>
        </Box>
        <Flex minH={20} alignItems={"center"} fontSize={20} fontWeight="bold" color={"kc.500"}>{value}</Flex>
    </Flex>
);

export default DashboardCard;
