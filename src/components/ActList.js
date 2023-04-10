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
            <List>
                {acts.map((act) => (
                    <ListItem button key={act.id} onClick={() => handleClickOpen(act)}>
                        <ListItemText primary={act.title} />
                    </ListItem>
                ))}
            </List>
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
