import React, { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { pathTo } from '../utils/routing';
import { AnimatePresence } from "framer-motion";
import {
  AuthRoot,
  DashboardRoot
} from '../pages';


function Router() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path={`${pathTo.root}*`} element={<AuthRoot />} />
        <Route path={`${pathTo.dashboard}*`} element={<DashboardRoot />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Router;


          // {/* <Route path={`${pathTo.profile}/*`} element={<ProfileRoot />} /> */}
          // {/* <Route
          //   element={
          //     <PrivateRoute>
          //       <Layout />
          //     </PrivateRoute>
          //   }
          // >
          //   <Route path={`${pathTo.onboarding}/*`} element={<OnboardingRoot />} />
          //   <Route path={`${pathTo.dashboard}/*`} element={<DashboardRoot />} />
          // </Route> */}
