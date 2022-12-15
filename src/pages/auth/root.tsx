import withSuspenseAndErrorBoundary from 'hocs/withSuspenseAndErrorBoundary';
import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { pathTo } from 'utils/routing';

const Login = lazy(() => import('./components/login'));
const SignUp = lazy(() => import('./components/signup'))

function AuthRoot() {
  return (
    <Routes>
      <Route
        index={true}
        element={<Navigate to={pathTo.login} replace={true} />}
      />
      <Route path={pathTo.login} element={<Login />} />
      <Route path={pathTo.register} element={<SignUp />} />
      {/* <Route path={pathTo.auth} element={<Auth />} /> */}
      {/* <Route path={pathTo.logout} element={<LogOut />} /> */}
      {/* <Route path={`${pathTo.error}`} element={<NotFound />} /> */}
      {/* <Route path="*" element={<Navigate replace={true} to={pathTo.error} />} /> */}
    </Routes>
  );
}

export default withSuspenseAndErrorBoundary(AuthRoot, {
  w: '100vw',
  h: '100vh',
});
