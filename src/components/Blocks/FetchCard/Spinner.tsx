import React from 'react';
import FetchCard from 'components/Blocks/FetchCard';
import { ChakraProps, FlexProps } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { MotionBox } from 'utils/custom-motion';

interface IHookInterface extends ChakraProps {
  loading: boolean;
  error: unknown;
  triggerReload?: () => void;
  loadingText?: string;
  isFetching?: boolean;
}

export interface ISpinnerProps extends ChakraProps {
  children?: React.ReactNode;
  hook: IHookInterface;
  asSkeleton?: boolean;
  skeletonProps?: ChakraProps & { [x: string]: any };
  isEmpty?: boolean;
  emptyMessage?: string | React.ReactNode;
  overlay?: boolean;
}

const Spinner: React.FC<
  ISpinnerProps &
    FlexProps &
    ChakraProps & {
      align?: FlexProps['align'];
      justify?: FlexProps['justify'];
    }
> = ({
  children,
  hook,
  justify,
  w,
  h,
  align,
  asSkeleton,
  skeletonProps,
  isEmpty,
  overlay,
  emptyMessage,
  ...rest
}: ISpinnerProps &
  FlexProps &
  ChakraProps & {
    align?: FlexProps['align'];
    justify?: FlexProps['justify'];
  }) => {
  const { loading, triggerReload, loadingText } = hook;
  const isFetching = hook?.isFetching;
  return loading || hook?.error ? (
    <FetchCard
      {...rest}
      isFetching={isFetching}
      overlay={overlay}
      align={align || 'center'}
      justify={justify || 'center'}
      w={w || '100%'}
      h={h || '100vh'}
      text={loadingText || ''}
      loading={loading}
      asSkeleton={asSkeleton}
      skeletonProps={skeletonProps}
      error={hook?.error}
      reload={() => {
        if (triggerReload) {
          triggerReload();
        }
      }}
    />
  ) : isEmpty ? (
    <AnimatePresence>
      <MotionBox layoutId="selected">{emptyMessage}</MotionBox>
    </AnimatePresence>
  ) : (
    <>{children}</>
  );
};

export default Spinner;
