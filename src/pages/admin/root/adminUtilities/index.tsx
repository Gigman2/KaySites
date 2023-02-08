import Accounts from 'pages/admin/components/AdminUtilities/accounts';
import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { pathTo } from 'utils/routing';


const AdminOutlet = lazy(() => import('../../components/adminOutlet'))

export default function AdminUtilityRoot() {
    return (
        <Routes>
            <Route path={pathTo.root} element={<AdminOutlet />}>
                <Route
                    index={true}
                    element={<Navigate to={pathTo.accounts} replace={true} />}
                />
                <Route path={pathTo.accounts} element={<Accounts />}/>
            </Route>
        </Routes>
    );
}