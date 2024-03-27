import {  useNavigate, } from 'react-router-dom';
import './menu.css'
import { useState } from 'react';
import { IconButton, Stack, Tooltip, Menu, MenuItem, ListItemIcon, Typography, Divider } from '@mui/material';
import { GolfCourse, Groups3, Home } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

export const DrawerMenu = () => {
    const navigate  = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        
      setAnchorEl(null);
    };
    

    return(
        <div>
            <Stack direction="row" justifyContent="flex-start" pt={2} pb={2} borderBottom={"2px solid #F652A0"}>
            <Tooltip title="Account settings">
                <Stack direction="row" justifyContent="space-between" width="100%" px={2}>
                    <Typography component="h1" variant="h5" color="#F652A0" fontWeight={600} fontSize={"1.75rem"}>El Bueno open</Typography>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        >
                        <MenuIcon />
                </IconButton>
                        </Stack>
            </Tooltip>
            </Stack>
            <Menu
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        width: '100%',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 4,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem onClick={() => { handleClose(); navigate('/')}}>
                    <ListItemIcon>
                        <Home fontSize="small" />
                    </ListItemIcon>
                    Start
                </MenuItem>
                <MenuItem onClick={() => { handleClose(); navigate('/contest')}}>
                    <ListItemIcon>
                        <GolfCourse fontSize="small" />
                    </ListItemIcon>
                    Tävlingar
                </MenuItem>
                {/* <MenuItem onClick={() => { handleClose(); navigate('/event')}}>
                    <ListItemIcon>
                        <EventNote fontSize="small" />
                    </ListItemIcon>
                    Upplägg
                </MenuItem> */}
                <MenuItem onClick={() => { handleClose(); navigate('/participants')}}>
                    <ListItemIcon>
                        <Groups3 fontSize="small" />
                    </ListItemIcon>
                    Gubbar
                </MenuItem>
            </Menu>
        </div>
    );
};