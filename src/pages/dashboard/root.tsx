import withSuspenseAndErrorBoundary from 'hocs/withSuspenseAndErrorBoundary';
import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { pathTo } from 'utils/routing';

const Layout = lazy(() => import('containers/layout/index'));
const Applications = lazy(() => import('./components/applications'));

function DashboardRoot() {
  return (
    <Routes>
      <Route path={pathTo.root} element={<Layout />}>
          <Route
            index={true}
            element={<Navigate to={pathTo.applications} replace={true} />}
          />
          <Route path={pathTo.applications} element={<Applications />} />
      </Route>
      {/* <Route path={pathTo.register} element={<SignUp />} /> */}
      {/* <Route path={pathTo.auth} element={<Auth />} /> */}
      {/* <Route path={pathTo.logout} element={<LogOut />} /> */}
      {/* <Route path={`${pathTo.error}`} element={<NotFound />} /> */}
      {/* <Route path="*" element={<Navigate replace={true} to={pathTo.error} />} /> */}
    </Routes>
  );
}

export default withSuspenseAndErrorBoundary(DashboardRoot, {
  w: '100vw',
  h: '100vh',
});
