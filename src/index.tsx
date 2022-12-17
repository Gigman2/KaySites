import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from 'utils/ErrorBoundary';
import { createStandaloneToast } from '@chakra-ui/toast';
import SuspenseWithErrorBoundary from 'components/SuspenseAndErrorBoundary';
import LoadingTopBar from 'components/Blocks/FetchCard/LoadingBar';
import NoInternetConnection from 'components/Blocks/NoInternetConnection';
import { theme } from './theme/theme';
import 'assets/styles/index.css';

const App = lazy(() => import('containers/app/index'));

const { ToastContainer } = createStandaloneToast({ theme });


function ThemeApp() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ErrorBoundary>
            <SuspenseWithErrorBoundary w="100vw" h="100vh">
              <App />
            </SuspenseWithErrorBoundary>
            <ToastContainer />
            <NoInternetConnection />
            <LoadingTopBar />
        </ErrorBoundary>
      </ChakraProvider>
    </BrowserRouter>
  );
}

const container = document.getElementById('root') as Element | DocumentFragment;
const root = createRoot(container);
root.render(<ThemeApp />);
