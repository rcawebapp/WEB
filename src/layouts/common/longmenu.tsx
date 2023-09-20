import Link from 'next/link';
import * as React from 'react';

import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import { Login } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import ListItemIcon from '@mui/material/ListItemIcon';

import Iconify from 'src/components/iconify';
import Translate from 'src/app/[locale]/sections/Translate';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title="Cuenta">
        <IconButton
          onClick={handleClick}
          size="large"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Iconify icon="line-md:account" color="#212b36" width="32" height="32" />
          {/* <AccountCircle sx={{ width: 32, height: 32 }} /> */}
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link href="/auth/iniciar-sesion" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem onClick={handleClose} style={{ fontSize: '15px' }}>
            {/* <Avatar /> Iniciar Sesión */}
            <ListItemIcon>
              <Login fontSize="medium" />
            </ListItemIcon>
            <Translate section="navHeader" text="Iniciar sesion" />
          </MenuItem>
        </Link>
        {/* <Divider />
        <Link href="/soporte" style={{ textDecoration: 'none', color:'inherit' }}>
    <MenuItem onClick={handleClose} style={{ fontSize: '15px' }}> 
      
          <ListItemIcon>
            <Settings fontSize="medium" />
          </ListItemIcon>
         Soporte
        </MenuItem></Link> */}
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem> */}
      </Menu>
    </>
  );
}
