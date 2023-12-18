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
import SearchIcon from '@mui/icons-material/Search';
// const menuBar= ['home', 'products', 'cart', 'you']

const SideNavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const closeHandler = () => {
    setOpenMenu(false);
  };
  return (
    <React.Fragment>
      <Box
        variant='div'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          margin: '0 20px',
          marginBottom: '30px',
        }}
      >
        <Box marginTop='30px'>
          <Box
            sx={{
              backgroundColor: 'red',
              marginRight: '20px',
              borderRadius: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                width: '700px',
                height: '80px',
              }}
            ></Typography>
            <SearchIcon
              sx={{
                color: 'black',
                marginRight: '20px',
                width: '40px',
                height: '40px',
              }}
            />
          </Box>
        </Box>
        <Box
          marginTop='30px'
          // display='flex'
          backgroundColor='red'
          borderRadius={'20px'}
        // justifyContent={'center'}
        // alignContent={'center'}
        >
          <IconButton
            onClick={() => setOpenMenu(true)}
            sx={{ width: '80px', height: '80px' }}
          >
            <RiApps2Line className='menu' color='black' />
          </IconButton>
          <Drawer
            className='drawer'
            open={openMenu}
            onClose={() => setOpenMenu(false)}
            sx={{ Color: 'red' }}
          >
            <List
              component='nav'
              sx={{
                width: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <ListItemButton onClick={closeHandler}>
                <HomeIcon sx={{ marginRight: '10px', color: 'white' }} />
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
                <AccountCircleIcon
                  sx={{ marginRight: '10px', color: 'white' }}
                />
                <ListItemText id='side-titel'> Login</ListItemText>
              </ListItemButton>
            </List>
          </Drawer>
        </Box>
      </Box>
      <img id='logo' src='logo.png' alt='png' width={110} height={110} />
    </React.Fragment>
  );
};

export default SideNavBar;
