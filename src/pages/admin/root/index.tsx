import withSuspenseAndErrorBoundary from 'hocs/withSuspenseAndErrorBoundary';
import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { pathTo } from 'utils/routing';


const Layout = lazy(() => import('containers/layout/index'));
const Home = lazy(() => import('../components/home'))
const ApplicationRoot = lazy(() => import('./application'))
const AdminUtilitiesRoot = lazy(() => import('./adminUtilities'))
const PolicyDocumentRoot = lazy(() => import('./policyDocument'))
const InstitutionRoot = lazy(() => import('./institution'))



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
                <Route path={`${pathTo.institution}/*`} element={<InstitutionRoot />} />
                <Route path={`${pathTo.fees}/*`} element={<InstitutionRoot />} />
                <Route path={`${pathTo.registeredUsers}/*`} element={<InstitutionRoot />} />
                <Route path={`${pathTo.financials}/*`} element={<InstitutionRoot />} />
                <Route path={`${pathTo.settings}/*`} element={<InstitutionRoot />} />
            </Route>
        </Routes>
    );
}

export default withSuspenseAndErrorBoundary(AdminRoot, {
    w: '100vw',
    h: '100vh',
});
