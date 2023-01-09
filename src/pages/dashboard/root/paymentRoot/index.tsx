import React, {lazy}  from 'react';
import {  Outlet, Route, Routes } from 'react-router-dom';
import { pathTo } from 'utils/routing';

const Payments = lazy(() => import('../../components/payment'));
const AddCardPayment = lazy(() => import('../../components/payment/addCardPayment'));
const AddBankTransfer  = lazy(() => import('../../components/payment/addBankTransfer'));


const PaymentRoot = () => {

    return  (
    <Routes>
        <Route path={pathTo.root} element={<Outlet />}>
            <Route path={`${pathTo.addBank}`} element={<AddBankTransfer />}/>
            <Route path={`${pathTo.addCard}`} element={<AddCardPayment />}/>
            <Route index={true} element={<Payments />} />
        </Route>
    </Routes>
)};

export default PaymentRoot;