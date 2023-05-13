import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Container } from '@mui/material';

const PostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title || '');
    const [content, setContent] = useState(initialValues.content || '');

    const handleSubmit = () => {
        onSubmit({ title, content });
    };

    return (
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        multiline
                        rows={4}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box textAlign="right">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

PostForm.defaultProps = {
    initialValues: {},
};

export default PostForm;
