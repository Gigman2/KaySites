import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import useLayout from "stores/layout";

function AdminWrapper({children}) {
    const { setDashboard } = useLayout(['setDashboard'])

    useEffect(() => {
        setDashboard('admin')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <Box>
        {children}
    </Box>
}

export default AdminWrapper;
