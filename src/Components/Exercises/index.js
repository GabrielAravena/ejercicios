import React from 'react'
import {Grid} from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const style = {
    paper:{
        padding: 20,
        margin: 10,
        height: 500,
        overflowY: 'auto',
    },
    div: {
        marginTop: 20,
        marginBottom: 20,
    }
}
export default ({exercises, category, onSelect, exercise, onDelete, onSelectedEdit, editMode, muscles, onEdit}) =>
<Grid container >
    <Grid item sm>
        <LeftPane 
            style={style}
            exercises = {exercises}
            category={category}
            onSelect={onSelect}
            onDelete={onDelete}
            onSelectedEdit={onSelectedEdit}
        />
    </Grid>
    <Grid item sm>
        <RightPane 
            exercise={exercise}
            style={style}
            editMode={editMode}
            onEdit={onEdit}
            muscles={muscles}
        />
    </Grid>
</Grid>