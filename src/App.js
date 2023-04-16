import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { Box, Paper } from '@mui/material';
import ActSelection from './components/ActSelection';
import Footer from './components/Footer';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2b5876',
        },
        secondary: {
            main: '#f0f0f0',
        },
        background: {
            default: '#f0f0f0',
        },
        text: {
            primary: '#333333',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#090909',
        },
        secondary: {
            main: '#1c1c1c',
        },
        background: {
            default: '#1c1c1c',
        },
        text: {
            primary: '#f0f0f0',
        },
    },
});

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                <Typography component="span" sx={{ mr: 1 }}>
                    Light
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange} />
                <Typography component="span" sx={{ ml: 1 }}>
                    Dark
                </Typography>
            </Box>
            <Container maxWidth="md" sx={{ py: 4 }}>
                <Paper
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        px: 2,
                        py: 1,
                        mb: 2,
                    }}
                >
                    <Typography variant="h2" component="h1">
                        Act Selector
                    </Typography>
                </Paper>
                <ActSelection />
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
