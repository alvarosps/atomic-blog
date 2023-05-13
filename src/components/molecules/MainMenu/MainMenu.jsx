import React from 'react';
import { List, ListItem } from '@mui/material';
import MenuLink from '../../atoms/MenuLink/MenuLink';

const MainMenu = () => {
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <List
            component="nav"
            aria-labelledby="main-navigation"
            sx={{ display: 'flex' }}
        >
            {menuItems.map((item) => (
                <ListItem key={item.name}>
                    <MenuLink to={item.path} sx={{ color: 'white' }}>
                        {item.name}
                    </MenuLink>
                </ListItem>
            ))}
        </List>
    );
};

export default MainMenu;
