import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SearchInput from '../../atoms/SearchInput/SearchInput';
import Button from '../../atoms/Button/Button';

const SearchBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        onSearch(searchValue);
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            height="100%"
            sx={{ marginBottom: '7px' }}
        >
            <Box>
                <Typography variant="subtitle2">Search the site</Typography>
                <SearchInput
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Enter keyword"
                />
            </Box>
            <Button
                onClick={handleSearch}
                sx={{
                    marginLeft: 1,
                    marginTop: '20px',
                    backgroundColor: '#FFF',
                    color: 'primary.main',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        color: '#FFF',
                    },
                }}
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;
