import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ ...props }) => {
    return (
        <TextField
            variant="outlined"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                inputProps: {
                    style: { padding: '5px' },
                },
            }}
            sx={{
                bgcolor: 'background.paper',
                borderRadius: 1,
            }}
            {...props}
        />
    );
};

export default SearchInput;
