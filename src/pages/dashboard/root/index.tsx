import withSuspenseAndErrorBoundary from 'hocs/withSuspenseAndErrorBoundary';
import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { pathTo } from 'utils/routing';
import Messages from '../components/messages';
import ApplicationProgress from '../components/progress';
import PaymentRoot from './paymentRoot';


const Layout = lazy(() => import('containers/layout/index'));
const Applications = lazy(() => import('../components/applications'));
const Documents = lazy(() => import('../components/documents'));


function DashboardRoot() {
  return (
    <Routes>
      <Route path={pathTo.root} element={<Layout />}>
          <Route
            index={true}
            element={<Navigate to={pathTo.applications} replace={true} />}
          />
          <Route path={pathTo.applications} element={<Applications />} />
          <Route path={pathTo.documentLibrary} element={<Documents />} />
          <Route path={pathTo.messages} element={<Messages />} />

          <Route path={`${pathTo.payment}/*`} element={<PaymentRoot />} />
          
          <Route path={pathTo.applicationProgress} element={<ApplicationProgress />} />
      </Route>
    </Routes>
  );
}

export default withSuspenseAndErrorBoundary(DashboardRoot, {
  w: '100vw',
  h: '100vh',
});
