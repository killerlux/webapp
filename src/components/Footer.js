// components/Footer.js

import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                py: 2,
            }}
        >
            <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} Aymen Kouskoussi
            </Typography>
            <Box sx={{ mt: 1 }}>
                <Link href="/terms" color="inherit" target="_blank" rel="noopener">
                    Terms of Service
                </Link>
                <Link href="/privacy" color="inherit" target="_blank" rel="noopener" sx={{ mx: 1 }}>
                    Privacy Policy
                </Link>
                <Link href="/contact" color="inherit" target="_blank" rel="noopener">
                    Contact Us
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;
