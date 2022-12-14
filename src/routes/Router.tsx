import React, { lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { pathTo } from '../utils/routing';
import {
  AuthRoot
} from '../pages';


function Router() {
  return (
    <Routes>
      <Route path={`${pathTo.root}*`} element={<AuthRoot />} />

      {/* <Route path={`${pathTo.profile}/*`} element={<ProfileRoot />} /> */}
      {/* <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path={`${pathTo.onboarding}/*`} element={<OnboardingRoot />} />
        <Route path={`${pathTo.dashboard}/*`} element={<DashboardRoot />} />
      </Route> */}
    </Routes>
  );
}

export default Router;
