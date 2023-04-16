import React, { useState } from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Grid,
} from '@mui/material';

const ActList = ({ acts }) => {
    const [open, setOpen] = useState(false);
    const [selectedAct, setSelectedAct] = useState(null);

    const handleClickOpen = (act) => {
        setSelectedAct(act);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Grid container spacing={2}>
                {acts.map((act, index) => (
                    <Grid item xs={12} sm={6} md={3} key={act.id}>
                        <ListItem
                            button
                            onClick={() => handleClickOpen(act)}
                            sx={{
                                width: '100%',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <ListItemText primary={act.title} />
                        </ListItem>
                    </Grid>
                ))}
            </Grid>
            {selectedAct && (
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>{selectedAct.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>{selectedAct.answer}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
};

export default ActList;
