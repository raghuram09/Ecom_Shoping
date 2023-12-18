import { AppBar, useMediaQuery, useTheme } from '@mui/material';

import SideNavBar from '../sidenavbar/SideNavBar';

const NavBar = () => {
    const isMatch = useMediaQuery(useTheme().breakpoints.down('md'));
    return (
        <>
            <AppBar
                variant='outlined'
                elevation={0}
                sx={{ position: 'sticky', backgroundColor: 'transparent' }}
            >
                {isMatch ? (
                    <>
                        <SideNavBar />
                    </>
                ) : (
                    <>
                        <h1>move your screen to md</h1>
                    </>
                )}
            </AppBar>
        </>
    );
};

export default NavBar;

{
    /* <Box>
                      <ListItemButton sx={{ color: 'black' }}>
                          <RiApps2Line />
                      </ListItemButton>
                  </Box> */
}
