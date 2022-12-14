/* eslint-disable */
import { FC } from "react";
import { Text, Stack, VStack } from "@chakra-ui/react";
import { IoIosRefresh } from "react-icons/io";
import CustomButton from "./CutomButton";

interface IProps {
  name?: string;
  message?: string;
  stack?: string;
  reload(): void;
  size?: "sm" | "md";
}

const ReloadButton: FC<IProps> = ({
  size = "md",
  name,
  message,
  stack,
  reload,
}) => {
  const decodeStack = stack?.split("\n").map((line) => {
    return decodeURIComponent(line);
  });

  stack = decodeStack?.join("\n")?.split("at ")[1]?.split(" ")[0];
  return (
    <VStack spacing="1rem">
      {process.env.NODE_ENV === "development" ? (
        <Stack spacing="0.3rem" textAlign="center">
          <Text fontSize={size} color="cf-cf-red.500" fontWeight="semibold">
            {name || ""}
          </Text>
          <Text fontWeight="semibold" fontSize="lg">
            {message}
          </Text>
          <Text fontSize={size}>at {stack}</Text>
        </Stack>
      ) : (
        <Text fontSize={size}>Something went wrong. Contact support</Text>
      )}
      <CustomButton
        btype="solid"
        size="md"
        fontSize="md"
        rounded="20px"
        onClick={reload}
        title={size === "md" ? "Try again" : ""}
        leftIcon={<IoIosRefresh fontSize="lg" />}
        myRef={undefined}
        color="gray"
        rightIcon={undefined}
        isLoading={undefined}
        isDisabled={undefined}
      />
    </VStack>
  );
};

export default ReloadButton;
