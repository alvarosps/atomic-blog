import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';

const AboutTemplate = () => {
    return (
        <Box mt={4} data-testid="about-template">
            <Typography variant="h4" mb={3} textAlign="center">
                About
            </Typography>
            <Grid container spacing={4}>
                <Grid
                    item
                    xs={12}
                    md={4}
                    display="flex"
                    justifyContent="center"
                >
                    <Avatar
                        src="https://via.placeholder.com/200"
                        alt="Author"
                        sx={{ width: 200, height: 200 }}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" mb={2}>
                        Our Story
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque euismod risus in sem consequat, id
                        sollicitudin turpis auctor. Fusce faucibus varius justo,
                        vitae vehicula lacus interdum in. Nunc ac semper lorem,
                        eu hendrerit ligula.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Vivamus sit amet enim id urna tristique tristique. Cras
                        ultricies quam et urna vehicula, in varius nunc tempus.
                        Phasellus nec fringilla nunc. Quisque ullamcorper
                        accumsan lorem, et viverra nunc bibendum vel.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutTemplate;
