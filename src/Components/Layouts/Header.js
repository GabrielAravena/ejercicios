import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CreateDialog from '../Exercises/Dialogs/Create';

export default ({muscles, onCreateExercise, dialogMode, openDialog}) => {

    return <AppBar position="static">
    <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
            Exercises Database
        </Typography>
        <CreateDialog 
            muscles={muscles}
            onCreate={onCreateExercise}
            dialogMode={dialogMode}
            openDialog={openDialog}
        />
    </Toolbar>
</AppBar>
    
}
    
    

