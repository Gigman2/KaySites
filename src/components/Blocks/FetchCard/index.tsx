import React from 'react';
import { IoIosRefresh } from 'react-icons/io';
import {
  Flex,
  Text,
  Spinner,
  Skeleton,
  Grid,
  GridItem,
  ChakraProps,
} from '@chakra-ui/react';
import { range, rem } from 'helpers/misc';
import { AxiosError } from 'axios';
import { CustomButton } from 'components/Atoms';
import Overlay from './Overlay';

interface IFetchCardProps extends ChakraProps {
  overlay?: boolean;
  loading: boolean;
  error: unknown | AxiosError;
  text?: string;
  reload?: () => void;
  asSkeleton?: boolean;
  skeletonProps?: { repeat?: number } & ChakraProps;
  isFetching?: boolean;
  [x: string]: any;
}

const FetchCard: React.FC<IFetchCardProps> = ({
  loading,
  isFetching,
  error,
  text,
  reload,
  asSkeleton,
  skeletonProps = {},
  overlay,
  ...rest
}) => (
  <>
    {asSkeleton && loading ? (
      skeletonProps?.repeat ? (
        <Grid w="100%" templateColumns="repeat(layers, frames)">
          {range(skeletonProps?.repeat).map((item) => (
            <GridItem my={2} w="100%" borderRadius={10} key={item}>
              <Skeleton isLoaded={!loading} {...skeletonProps} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Skeleton isLoaded={!loading} {...skeletonProps} />
      )
    ) : overlay && loading ? (
      <Overlay text={text} loading={loading} />
    ) : (
      <Flex {...rest}>
        <Flex
          textAlign="center"
          align="center"
          justify="center"
          direction="column"
        >
          <>
            {(loading || isFetching) && (
              <Spinner
                position={isFetching ? 'fixed' : undefined}
                size="lg"
                speed="0.65s"
                color="cf.400"
                thickness="4px"
                emptyColor="gray.200"
                {...(isFetching ? { top: 0, right: 0, zIndex: 23043 } : {})}
                mb={rem(5)}
              />
            )}
            {text && !error && (
              <Text className="loading-text loading-text-b">{text}</Text>
            )}
            {error && !loading && (
              <>
                <Text fontSize="md" ml={2}>
                  Something went wrong.
                </Text>
                <CustomButton
                  btype="solid"
                  size="md"
                  fontSize="md"
                  rounded="20px"
                  onClick={reload}
                  title="Try again"
                  leftIcon={<IoIosRefresh fontSize="lg" />}
                  myRef={undefined}
                  color="gray"
                  rightIcon={undefined}
                  isLoading={undefined}
                  isDisabled={undefined}
                />
              </>
            )}
          </>
        </Flex>
      </Flex>
    )}
  </>
);

export default FetchCard;
