import AllDocuments from 'pages/admin/components/Documents/all';
import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { pathTo } from 'utils/routing';


const AdminOutlet = lazy(() => import('../../components/adminOutlet'))


export default function PolicyDocumentRoot() {
    return (
        <Routes>
            <Route path={pathTo.root} element={<AdminOutlet />}>
                <Route
                    index={true}
                    element={<Navigate to={pathTo.all} replace={true} />}
                />
                <Route path={pathTo.all} element={<AllDocuments />}/>
            </Route>
        </Routes>
    );
}