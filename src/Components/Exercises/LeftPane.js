import React, {Fragment} from 'react'
import {Paper, Typography, IconButton} from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default ({style, exercises, category, onSelect, onDelete, onSelectedEdit}) =>

    <div style={style.div}>
        <Fragment>
            <Paper elevation={3} style={style.paper}>
                {exercises.map(([group, exercises]) =>
                    !category || category === group
                    ? <Fragment key={group}>
                    <Typography 
                        variant="h5"
                        style={{textTransform: 'capitalize'}}
                    >
                        {group}
                    </Typography>
                    {exercises.map(({ id, title }) => (
                        <List component="ul" key={title}>
                            <ListItem button>
                                <ListItemText 
                                primary={title} 
                                onClick={() => onSelect(id)}
                                />
                                <IconButton
                                    onClick={() => onSelectedEdit(id)}
                                >
                                    <EditIcon />
                                </IconButton> 
                                <IconButton
                                    onClick={() => onDelete(id)}
                                >
                                    <DeleteIcon />
                                </IconButton> 
                            </ListItem>
                        </List>
                    ))}
                </Fragment>
                    : null
                )}
            </Paper>
        </Fragment>
        
    </div>