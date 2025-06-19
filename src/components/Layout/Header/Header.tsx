import { AppBar, Toolbar } from "@mui/material";


const Header = ({onToggleDrawer} : any) => {
    
    return <>
        <AppBar position="fixed" color="default" elevation={1} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} style={{backgroundColor: 'white'}}>
            <Toolbar>
                <h1 className="text-xl font-bold text-blue-600">QuickSync</h1>
            </Toolbar>
        </AppBar>
    </>
}

export default Header;
