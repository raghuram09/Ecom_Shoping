import { useMediaQuery, useTheme } from '@mui/material'

import SideNavBar from '../sidenavbar/SideNavBar';


const NavBar = () => {
    const isMatch = useMediaQuery(useTheme().breakpoints.down('md'))
    return (
        <>
            {/* <AppBar sx={{ position: 'sticky', backgroundColor: 'red' }}> */}
            {isMatch ? (
                <>

                    <SideNavBar />


                </>
            ) : (
                <>
                    <h1>move your screen to md</h1>
                </>
            )}

            {/* </AppBar > */}
        </>
    )
}

export default NavBar

{/* <Box>
                    <ListItemButton sx={{ color: 'black' }}>
                        <RiApps2Line />
                    </ListItemButton>
                </Box> */}