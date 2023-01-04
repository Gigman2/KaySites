import withSuspenseAndErrorBoundary from 'hocs/withSuspenseAndErrorBoundary';
import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { pathTo } from 'utils/routing';
import AddBankTransfer from '../components/payment/addBankTransfer';
import ApplicationProgress from '../components/progress';

const Payments = lazy(() => import('../components/payment'));
const AddCardPayment = lazy(() => import('../components/payment/addCardPayment'));


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
          
          <Route path={`${pathTo.payment}/${pathTo.addBank}`} element={<AddBankTransfer />}/>
          <Route path={`${pathTo.payment}/${pathTo.addCard}`} element={<AddCardPayment />}/>
          <Route path={pathTo.payment} element={<Payments />} />
          
          <Route path={pathTo.applicationProgress} element={<ApplicationProgress />} />
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
