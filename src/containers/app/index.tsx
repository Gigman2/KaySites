import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// CONTEXT
import withSuspenseAndErrorBoundary from 'hocs/withSuspenseAndErrorBoundary';
import Router from '../../routes/Router';
import useAutoRemoveScrollBar from '../../hooks/useAutoRemoveScrollBar';

// eslint-disable-next-line import/no-webpack-loader-syntax
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 60 * 24 * 1000,
    },
  },
});


/**
 * Contains all components of this application
 * @author Eric Kojo Abbey
 */

function App() {
  useAutoRemoveScrollBar();
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default withSuspenseAndErrorBoundary(App, { w: '100%', h: '100%' });