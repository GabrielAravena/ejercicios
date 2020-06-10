import React, {Fragment, useState} from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Form from '../Form'



export default ({muscles, onCreate, dialogMode, openDialog}) => {
    



    return <Fragment>
        <Fab size="small" onClick={openDialog}>
            <AddIcon />
        </Fab>
        <Dialog 
            open={dialogMode} 
            onClose={openDialog}
            >
            <DialogTitle>
                Create a new exercise
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please fill out the from below.
                </DialogContentText>
                <Form 
                    muscles={muscles}
                    onSubmit={onCreate}
                />
            </DialogContent>
        </Dialog>
    </Fragment>
}

    