import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#f44336',
        },
    },
});

export default theme;
