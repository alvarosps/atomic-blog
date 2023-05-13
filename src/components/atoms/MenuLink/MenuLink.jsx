import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const MenuLink = ({ to, children }) => {
    return (
        <ListItemButton component={NavLink} to={to}>
            <ListItemText primary={children} />
        </ListItemButton>
    );
};

export default MenuLink;
