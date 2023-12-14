import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import './SideBar.css';
import { RiApps2Line } from 'react-icons/ri';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
// const menuBar= ['home', 'products', 'cart', 'you']

const SideNavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const closeHandler = () => {
    setOpenMenu(false);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', flexDirection: 'row', margin: '0 20px' }}>
        <Box marginTop='30px'>
          <Typography
            sx={{
              width: '600px',
              height: '80px',
              backgroundColor: 'red',
              borderRadius: '20px',
              marginRight: '20px',
            }}
          >
            <img id='logo' src='logo.png' alt='png' width={110} height={110} />
          </Typography>
        </Box>
        <Box
          marginTop='30px'
          display='flex'
          backgroundColor='red'
          borderRadius={'20px'}
          justifyContent={'center'}
          alignContent={'center'}
        >
          <IconButton onClick={() => setOpenMenu(true)} sx={{ width: '70px' }}>
            <RiApps2Line className='menu' color='black' />
          </IconButton>
          <Drawer className='drawer' open={openMenu} onClose={() => setOpenMenu(false)} sx={{ Color: 'red' }}>
            <List
              component='nav'
              sx={{
                backgroundColor: 'red',
                width: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                // flexGrow: '1',

              }}
            >
              <ListItemButton onClick={closeHandler}>
                <HomeIcon sx={{ marginRight: '10px', color: 'white', }} />
                <ListItemText id='side-titel'> Home</ListItemText>
              </ListItemButton>
              <ListItemButton onClick={closeHandler}>
                <CategoryIcon sx={{ marginRight: '10px', color: 'white' }} />
                <ListItemText id='side-titel'> Category</ListItemText>
              </ListItemButton>
              <ListItemButton onClick={closeHandler}>
                <HomeIcon sx={{ marginRight: '10px', color: 'white' }} />
                <ListItemText id='side-titel'> Cart</ListItemText>
              </ListItemButton>
              <ListItemButton onClick={closeHandler}>
                <HomeIcon sx={{ marginRight: '10px', color: 'white' }} />
                <ListItemText id='side-titel'> You</ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ color: 'black' }} onClick={closeHandler}>
                <AccountCircleIcon sx={{ marginRight: '10px', color: 'white' }} />
                <ListItemText id='side-titel'> Login</ListItemText>
              </ListItemButton>
            </List>
          </Drawer>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default SideNavBar;
