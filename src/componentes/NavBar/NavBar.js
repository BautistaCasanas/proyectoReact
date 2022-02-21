
import CartWidget from '../CartWidget/CartWidget';
import img from './allShop.png';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <MenuItem component={Link} to="/"><img src={img} id="imgLogoPagina" width={80} alt='logo-pagina'/></MenuItem>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            <MenuItem  onClick={handleCloseNavMenu} component={Link} to="/">Home</MenuItem>
            <MenuItem  onClick={handleCloseNavMenu} component={Link} to="/Products">Products</MenuItem>
            <MenuItem  onClick={handleCloseNavMenu} component={Link} to="/Contact">Contact</MenuItem>

            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <MenuItem  onClick={handleCloseNavMenu} component={Link} to="/">AllShop</MenuItem>
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <MenuItem component={Link} to="/">Home</MenuItem>
          <MenuItem component={Link} to="/Products">Products</MenuItem>
          <MenuItem component={Link} to="/Contact">Contact</MenuItem>
          </Box>
            <CartWidget></CartWidget>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
