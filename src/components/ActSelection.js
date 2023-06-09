import React, { useState, useEffect } from 'react';
import ActList from './ActList';
import { Box, Typography } from '@mui/material';

const ActSelection = () => {
    const [acts, setActs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/acts')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data from the backend');
                }
                return res.json();
            })
            .then((data) => {
                const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
                setActs(sortedData);
            })
            .catch((error) => setError(error.message));
    }, []);

    if (error) {
        return (
            <Box>
                <Typography variant="h5" component="h2" gutterBottom>
                    Error: {error}
                </Typography>
            </Box>
        );
    }

    return (
            <Box>
                <Typography variant="h4" component="h2" gutterBottom>
                    Select a role...
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                <ActList acts={acts} />
            </Box>
        </Box>
    );
};

export default ActSelection;
