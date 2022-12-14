import SuspenseWithErrorBoundary, {
  ISuspenseAndErrorBoundary,
} from 'components/SuspenseAndErrorBoundary';
import { useState } from 'react';

/**
 * @description HOC that creates a loading and error boundary for the component
 */

function withSuspenseAndErrorBoundary<IComponentProps extends object>(
  Component: React.FC<IComponentProps & object>,
  options: ISuspenseAndErrorBoundary = {}
) {
  const WithSuspenseAndErrorBoundary: React.FC<IComponentProps & object> = ({
    ...rest
  }: IComponentProps & object) => {
    const [numberToSpin, setNumberToSpin] = useState<number>(
      options?.numberToSpin || 0
    );

    return (
      <SuspenseWithErrorBoundary {...{ ...options, numberToSpin }}>
        <Component {...{ ...rest, setNumberToSpin }} />
      </SuspenseWithErrorBoundary>
    );
  };

  return WithSuspenseAndErrorBoundary;
}

export default withSuspenseAndErrorBoundary;
