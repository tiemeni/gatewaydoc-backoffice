import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Menu } from '@mui/material';
import { style } from "./style"
import { Link } from 'react-router-dom';


export default function MenuListComposition({ IconName, styles }) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction="row" spacing={2}>
            <div>
                {IconName === "mail" &&
                    <SettingsOutlinedIcon
                        ref={anchorRef}
                        onClick={handleToggle}
                        titleAccess='Messagerie'
                        style={styles} />}
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <Menu
                                        anchorEl={anchorRef.current}
                                        id="account-menu"
                                        open={open}
                                        onClose={handleClose}
                                        onClick={handleClose}
                                        PaperProps={{
                                            elevation: 1,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1,
                                                ml: 1,
                                                '& .MuiAvatar-root': {
                                                    width: 30,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 0,
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
                                        <MenuList
                                            autoFocusItem={open}
                                            style={{ outline: "none" }}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                        >
                                            <Link to={{ pathname: 'patients' }}>
                                                <MenuItem onClick={handleClose} style={style.menuItem}>Compte Patient</MenuItem>
                                            </Link>
                                            <Link to={{ pathname: 'structure' }}>
                                                <MenuItem onClick={handleClose} style={style.menuItem}>Gestion de la structure</MenuItem>
                                            </Link>
                                            <Link to={{ pathname: 'lieux' }}>
                                                <MenuItem onClick={handleClose} style={style.menuItem}>Lieux</MenuItem>
                                            </Link>
                                            {/* <Link to={{ pathname: 'activites' }}>
                                                <MenuItem onClick={handleClose} style={style.menuItem}>Activités</MenuItem>
                                            </Link> */}
                                            <Link to={{ pathname: 'motifs' }}>
                                                <MenuItem onClick={handleClose} style={style.menuItem}>Motifs de Rendez-vous</MenuItem>
                                            </Link>
                                            <Link to={{ pathname: 'specialites' }}>
                                                <MenuItem onClick={handleClose} style={style.menuItem}>Spécialités</MenuItem>
                                            </Link>
                                            {/* <Link to={{ pathname: 'typepatients' }}>
                                                <MenuItem onClick={handleClose} style={style.menuItem}>Types Patients</MenuItem>
                                            </Link> */}
                                            <Link to={{ pathname: 'users' }}>
                                                <MenuItem onClick={handleClose} style={style.menuItem}>Utilisateurs</MenuItem>
                                            </Link>
                                            <Link to={{ pathname: 'groupe_droits' }}>
                                                <MenuItem onClick={handleClose} style={style.menuItem}>Groupes et droits</MenuItem>
                                            </Link>
                                            <Link to={{ pathname: 'praticiens' }}>
                                                <MenuItem onClick={handleClose} style={style.menuItem}>Fiches praticiens</MenuItem>
                                            </Link>
                                            {/* <Link to={{ pathname: 'advancedOptions' }}>
                                                <MenuItem onClick={handleClose} style={style.menuItem}>Options avancées</MenuItem>
                                            </Link> */}
                                        </MenuList>
                                    </Menu>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}