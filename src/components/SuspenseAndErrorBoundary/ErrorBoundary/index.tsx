import {
  Box,
  ChakraProps,
  Flex,
  FlexProps,
  Icon,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import { IoReloadCircle } from 'react-icons/io5';
import ReloadButton from 'components/Atoms/Button/ReloadButton';
import { rem } from '../../../helpers/misc';

export interface IErrorBoundaryUIComponent {
  containerStyle?: FlexProps & ChakraProps;
  silently?: boolean;
  defaultMessage?: string;
  noButton?: boolean;
}

export default function ErrorBoundaryUIComponent({
  containerStyle = {},
  silently,
  defaultMessage,
  noButton,
  error,
  resetErrorBoundary,
}: IErrorBoundaryUIComponent & {
  error: Error | Record<string, unknown>;
  resetErrorBoundary: (...args: unknown[]) => void;
}) {
  const stack = error?.stack as string;
  const message =
    ((
      (
        (
          (
            (error as Record<string, unknown>)?.response as Record<
              string,
              unknown
            >
          )?.data as Record<string, unknown>
        )?.validation as Record<string, unknown>
      )?.query as Record<string, unknown>
    )?.message as string) ||
    ((
      ((error as Record<string, unknown>)?.response as Record<string, unknown>)
        ?.data as Record<string, unknown>
    )?.message as string) ||
    error?.message;

  const name = error?.name;
  return (
    <Flex
      {...containerStyle}
      direction={containerStyle?.direction || 'column'}
      justify={containerStyle?.justify || 'center'}
      align={containerStyle?.align || 'center'}
      w={containerStyle?.w || '100%'}
      h={containerStyle?.h || '100%'}
    >
      {!silently ? (
        <ReloadButton
          name={name as string}
          message={message as string}
          stack={stack}
          reload={() => {
            if (error?.stack) {
              window.location?.reload();
            } else {
              resetErrorBoundary();
            }
          }}
        />
      ) : (
        <Tooltip label={message as string}>
          {!noButton ? (
            <Box cursor="pointer">
              <Icon
                fontSize={rem(22)}
                color="red"
                onClick={() => resetErrorBoundary()}
                as={IoReloadCircle}
              />
            </Box>
          ) : (
            <Box w="100%">
              <Text>{(defaultMessage || message) as string}</Text>
            </Box>
          )}
        </Tooltip>
      )}
    </Flex>
  );
}
