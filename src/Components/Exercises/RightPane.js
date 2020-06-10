import React, { Fragment } from 'react'
import {Paper, Typography} from '@material-ui/core'
import From from '../Exercises/Form'

export default ({style, exercise, exercise: {title='Welcome!', description='Please, select an exercise from the list on the left.'}, editMode, onEdit, muscles}) =>
    <div style={style.div}>
        <Paper elevation={3} style={style.paper}>
            {editMode
            ? <form>
                <From
                    prevExercise={exercise}
                    open={editMode} 
                    onSubmit={onEdit}
                    muscles={muscles}    
                />
            </form>
            : <Fragment>
                <Typography 
                    variant="h3"
                    >
                    {title}
                </Typography>
                <Typography 
                    variant="h5"
                    >
                    {description}
                </Typography>
              </Fragment> 
            }
            
        </Paper>
    </div>