import withSuspenseAndErrorBoundary from 'hocs/withSuspenseAndErrorBoundary';
import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { pathTo } from 'utils/routing';


const Layout = lazy(() => import('containers/layout/index'));
const Home = lazy(() => import('../components/home'))
const ApplicationRoot = lazy(() => import('./application'))
const AdminUtilitiesRoot = lazy(() => import('./adminUtilities'))
const PolicyDocumentRoot = lazy(() => import('./policyDocument'))


function AdminRoot() {
    return (
        <Routes>
            <Route path={pathTo.root} element={<Layout />}>
                <Route
                    index={true}
                    element={<Navigate to={pathTo.home} replace={true} />}
                />
                <Route path={pathTo.home} element={<Home />} />
                <Route path={`${pathTo.application}/*`} element={<ApplicationRoot />} />
                <Route path={`${pathTo.adminUtilities}/*`} element={<AdminUtilitiesRoot />} />
                <Route path={`${pathTo.policyDocument}/*`} element={<PolicyDocumentRoot />} />
            </Route>
        </Routes>
    );
}

export default withSuspenseAndErrorBoundary(AdminRoot, {
    w: '100vw',
    h: '100vh',
});
