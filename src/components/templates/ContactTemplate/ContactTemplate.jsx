import React from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';

const ContactTemplate = () => {
    return (
        <Box mt={4} data-testid="contact-container">
            <Typography variant="h4" mb={3} textAlign="center">
                Contact
            </Typography>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" mb={2}>
                        Contact Information
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Email: example@example.com
                        <br />
                        Phone: +1 (555) 555-5555
                        <br />
                        Address: 123 Main St, Anytown, USA
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" mb={2}>
                        Get in Touch
                    </Typography>
                    <Box mt={2}>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            sx={{ marginBottom: '16px' }}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            sx={{ marginBottom: '16px' }}
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            multiline
                            rows={4}
                            variant="outlined"
                            sx={{ marginBottom: '16px' }}
                        />
                        <Button variant="contained" color="primary">
                            Send Message
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactTemplate;
