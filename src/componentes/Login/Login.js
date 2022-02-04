import * as React from 'react';
import IconButton from '@mui/material/IconButton';

import Menu from '@mui/material/Menu'; 
import LoginAuth0 from './LoginAuth0';
import LogoutAuth0 from './LogoutAuth0';
import Profile from './Profile';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Login = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    


    return <div>

                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <PersonOutlineOutlinedIcon/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Profile/>
                  <LoginAuth0/>
                  <LogoutAuth0/>
                </Menu>
              </div>
  };
  
  export default Login;
  