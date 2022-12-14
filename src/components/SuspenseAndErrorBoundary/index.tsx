import { QueryErrorResetBoundary } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import React, { ReactNode } from 'react';
import Spinner, { ISpinnerProps } from 'components/Blocks/FetchCard/Spinner';
import { range } from 'helpers/misc';
import { ChakraProps, FlexProps } from '@chakra-ui/react';
import ErrorBoundaryUIComponent from './ErrorBoundary';

interface IFallBackUIProps {
  noButton?: boolean;
  silently?: boolean;
  defaultMessage?: string;
  containerStyle?: FlexProps & ChakraProps;
}

const withFallBackUI = ({
  noButton,
  silently,
  defaultMessage,
  containerStyle,
  ...rest
}: IFallBackUIProps & Partial<ISpinnerProps>): React.FC<{
  error: Error | Record<string, unknown>;
  resetErrorBoundary: (...args: unknown[]) => void;
}> => {
  const FallBackUI: React.FC<{
    error: Error | Record<string, unknown>;
    resetErrorBoundary: (...args: unknown[]) => void;
  }> = ({
    error,
    resetErrorBoundary,
  }: {
    error: Error | Record<string, unknown>;
    resetErrorBoundary: (...args: unknown[]) => void;
  }) => (
    <ErrorBoundaryUIComponent
      error={error}
      resetErrorBoundary={resetErrorBoundary}
      noButton={noButton}
      silently={silently}
      defaultMessage={defaultMessage}
      containerStyle={{
        ...(containerStyle || {}),
        ...{ ...(rest?.asSkeleton ? rest?.skeletonProps : rest) },
      }}
    />
  );

  return FallBackUI;
};

interface ISuspenseWithErrorBoundaryProps {
  children?: ReactNode;
  containerStyle?: FlexProps & ChakraProps;
  spinnerContainerProps?: FlexProps & ChakraProps;
  SpinnerContainerWrapper?: (props: Record<string, unknown>) => JSX.Element;
  numberToSpin?: number;
  silently?: boolean;
  defaultMessage?: string;
  noButton?: boolean;
}

export type ISuspenseAndErrorBoundary = ISuspenseWithErrorBoundaryProps &
  ChakraProps &
  FlexProps &
  Partial<ISpinnerProps>;

const SuspenseWithErrorBoundary: React.FC<ISuspenseAndErrorBoundary> = ({
  children,
  containerStyle = {},
  spinnerContainerProps = {},
  SpinnerContainerWrapper,
  numberToSpin = 1,
  silently,
  defaultMessage,
  noButton,
  ...rest
}: ISuspenseAndErrorBoundary) => {
  const Container = SpinnerContainerWrapper;
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={withFallBackUI({
            noButton,
            silently,
            defaultMessage,
            containerStyle,
            ...rest,
          })}
        >
          <React.Suspense
            fallback={
              Container ? (
                <Container {...spinnerContainerProps}>
                  {range(numberToSpin || 0, 1).map((_) => (
                    <Spinner
                      key={_}
                      {...rest}
                      w={rest?.w || '100%'}
                      h={rest?.h || '100%'}
                      align={(rest as FlexProps)?.align || 'center'}
                      justify={rest?.justify || 'center'}
                      hook={{ loading: true, error: false }}
                    />
                  ))}
                </Container>
              ) : (
                range(numberToSpin, 1).map((_) => (
                  <Spinner
                    key={_}
                    {...rest}
                    w={rest?.w || '100%'}
                    h={rest?.h || '100%'}
                    align={rest?.align || 'center'}
                    justify={rest?.justify || 'center'}
                    hook={{ loading: true, error: false }}
                  />
                ))
              )
            }
          >
            {children}
          </React.Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default SuspenseWithErrorBoundary;
