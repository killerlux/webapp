import React, { useState } from 'react';
import ActSelection from './components/ActSelection';
import { CssBaseline, Container, Typography, Box, ThemeProvider, Button } from '@mui/material';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
    });

    const handleDarkModeToggle = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };


    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="md">
                <Box my={4}>
                    <Typography variant="h2" component="h1" align="center" gutterBottom>
                        Prompt Generator
                    </Typography>
                    <Button variant="contained" onClick={handleDarkModeToggle}>
                        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </Button>
                    <ActSelection />
                </Box>
            </Container>
        </MuiThemeProvider>
    );
}

export default App;
