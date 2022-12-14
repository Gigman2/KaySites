import { Component, ErrorInfo, ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';
import ReloadButton from '../components/Atoms/Button/ReloadButton';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorData: {
    name: string;
    message: string;
    stack: unknown;
  };
}

function logger(error: Error, errorInfo: ErrorInfo) {
  return {
    name: error.name,
    message: error.message,
    stack: errorInfo.componentStack ?? error.stack,
  };
}

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  public state: State = {
    hasError: false,
    errorData: {
      name: '',
      message: '',
      stack: '',
    },
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      errorData: {
        name: '',
        message: '',
        stack: '',
      },
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    return this.setState({
      errorData: {
        ...logger(error, errorInfo),
      },
    });
  }

  public render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { name, message, stack } = this.state.errorData;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Flex align="center" justify="center" h="100vh">
          <ReloadButton
            name={name}
            message={message}
            stack={stack as string}
            reload={() => window.location.reload()}
          />
        </Flex>
      );
    }

    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children;
  }
}

export default ErrorBoundary;
