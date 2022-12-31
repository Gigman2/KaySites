import React, {lazy}  from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { pathTo } from 'utils/routing';

const Payments = lazy(() => import('../../components/payment'));
const AddCardPayment = lazy(() => import('../../components/payment/addCardPayment'));


const PaymentRoot = () => (
    <Routes>
        <Route path={pathTo.root} element={<Outlet />}>
            <Route index={true} element={<Payments />} />
            <Route path={pathTo.addCardPayment} element={<AddCardPayment />}/>
        </Route>
    </Routes>
);

export default PaymentRoot;