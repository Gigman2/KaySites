import React, {lazy}  from 'react';
import {  Outlet, Route, Routes } from 'react-router-dom';
import { pathTo } from 'utils/routing';

const Payments = lazy(() => import('../../components/payment'));


const PaymentRoot = () => {

    return  (
    <Routes>
        <Route path={pathTo.root} element={<Outlet />}>
            <Route index={true} element={<Payments />} />
        </Route>
    </Routes>
)};

export default PaymentRoot;