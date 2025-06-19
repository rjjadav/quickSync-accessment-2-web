import { useState } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined, Dashboard, ShoppingBagOutlined } from "@mui/icons-material";
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Tooltip } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Sidenav = ({ toggleDrawer }: any) => {
    const [drawerOpen, setDrawerOpen] = useState(true);
    const { pathname } = useLocation();

    const toggleDrawerHandler = () => {
        const open = !drawerOpen;
        setDrawerOpen(open);
        toggleDrawer(open);
    }

    return <Drawer variant="permanent" className="drawer-container">
        <Toolbar />
        <Box style={{
            width: drawerOpen ? '210px' : 'auto'
        }} color="default" className="sidebar-container">
            <div className="flex justify-end pr-2">
                <IconButton onClick={toggleDrawerHandler}>
                    {drawerOpen ? <ArrowBackIosOutlined fontSize="small" /> : <ArrowForwardIosOutlined fontSize="small" />}
                </IconButton>
            </div>
            <List>
                <ListItem key="dashboard" disablePadding component={Link} to={'/'}>
                    <ListItemButton className="flex gap-4 min-h-12 text-current" selected={pathname === "" || pathname === "/dashboard" || pathname === "/"}>
                        <ListItemIcon className="m-w-0">
                            <Dashboard />
                        </ListItemIcon>
                        {drawerOpen && <ListItemText children={<span style={{color: 'rgb(107 114 128)'}}>Dashboard</span>} />}
                    </ListItemButton>
                </ListItem>

                <ListItem key="orders" disablePadding component={Link} to={'/products'}>
                    <ListItemButton className="flex gap-4 min-h-12" selected={pathname === "/products"}>
                        <ListItemIcon className="m-w-0">
                            <ShoppingBagOutlined />
                        </ListItemIcon>
                        {drawerOpen && <ListItemText children={<span style={{color: 'rgb(107 114 128)'}}>Products</span>} />}
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Drawer >
}

export default Sidenav;