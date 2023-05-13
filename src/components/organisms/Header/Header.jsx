import React from 'react';
import { Box, AppBar, Toolbar } from '@mui/material';
import Logo from '../../atoms/Logo/Logo';
import MainMenu from '../../molecules/MainMenu/MainMenu';
import SearchBar from '../../molecules/SearchBar/SearchBar';

const Header = ({ onSearch }) => {
    return (
        <AppBar position="static" sx={{ height: 70 }}>
            <Toolbar sx={{ minHeight: '70px' }}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    px={1}
                >
                    <Box display="flex" alignItems="center">
                        <Logo />
                        <MainMenu />
                    </Box>
                    <Box>
                        <SearchBar onSearch={onSearch} />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
