import AllApplication from 'pages/admin/components/Application/all';
import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { pathTo } from 'utils/routing';


const AdminOutlet = lazy(() => import('../../components/adminOutlet'))

export default function ApplicationRoot() {
    return (
        <Routes>
            <Route path={pathTo.root} element={<AdminOutlet />}>
                <Route
                    index={true}
                    element={<Navigate to={pathTo.all} replace={true} />}
                />
                <Route path={pathTo.all} element={<AllApplication />}/>
            </Route>
        </Routes>
    );
}