import { Outlet } from "react-router-dom";
import AdminWrapper from 'pages/admin/wrapper';

function AdminOutlet() {
    return (
        <AdminWrapper>
           <Outlet />
        </AdminWrapper>
    )
}

export default AdminOutlet;
