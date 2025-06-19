import { useState } from "react"
import { Box, CssBaseline, Toolbar } from "@mui/material"

import Header from "./Header/Header"
import Sidenav from "./Sidenav/Sidenav"
import DashboardPage from "../../pages/Dashboard/Dashboard"
import { Outlet } from "react-router-dom"


const Layout = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(true);
    const toggleDrawer = () => {
        const isOpen = drawerOpen;
        setDrawerOpen(!isOpen);
    }


    return <Box sx={{ display: 'flex' }}>
        {/* <CssBaseline /> */}
        <Header onToggleDrawer={toggleDrawer} />
        <Sidenav toggleDrawer={setDrawerOpen} />
        <div style={{ marginLeft: drawerOpen ? '210px' : '56px', width: drawerOpen ? `calc(100vw - 210px)` : `calc(100vw - 56px)` }} className="p-4 min-h-screen bg-gray-200">
            <Toolbar />
            {/* <DashboardPage /> */}
            <Outlet/>
        </div>
    </Box>
}

export default Layout;