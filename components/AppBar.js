import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

const pages = 
[
  {link: '/', label: 'Home'},
  {link: 'premios', label: 'Premios'},
  {link: 'retos', label: 'Retos'},
  {link: 'faq', label: '¿Cómo funciona?'},
];

function AppBarComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ background: '#fa8700' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Image src="/logo.png" alt="Logo" width={40} height={40} /> */}
          <Box sx={{ flexGrow: 1, display: {xs: 'none', md:'flex'}, alignItems: 'center' }}>
            {pages.map((page) => (
              <Link key={page.link} href={`/${page.link}`}>
                <Typography
                  transform='capitalize'
                  color="white"
                  sx={{ marginRight: 2 }}
                >
                  {page.label}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              onClick={handleOpenNavMenu}
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                  <Link href={`/${page.link}`}>
                    <Typography transform='capitalize' color="textPrimary">
                      {page.label}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppBarComponent;
