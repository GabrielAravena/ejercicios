import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: 500,
    }
  }));


export default ({muscles, onSubmit, prevExercise}) => {
    const classes = useStyles();

    const getInitState = () => (
        prevExercise 
        ? prevExercise
        : {title: '', description:'', muscles:''}
    );

    const [exercise, setExercise] = useState(getInitState);

    const handleChange = e => {
        setExercise({
    
            ...exercise,
            [e.target.id]: e.target.value}
        )
    };

    const handleSubmit = e => {
        onSubmit({
            id: exercise.title.toLocaleLowerCase().replace(/ /g, '-'),
            ...exercise, 
            
            
            })  
        setExercise({
        
                title: '',
                description: '',
                muscles: ''
        })
    };

    useEffect(() => {
        prevExercise
        ? setExercise(prevExercise)
        : setExercise({title: '', description:'', muscles:''})
    }, [prevExercise]);


    return <form>
        <TextField
                        className={classes.formControl}
                        value={exercise.title}
                        onChange={handleChange}
                        id="title"
                        placeholder="Title"
                        margin="normal"
                    />
                    <br/>
                    <TextField
                        className={classes.formControl}
                        value={exercise.description}
                        onChange={handleChange}
                        id="description"
                        placeholder="Description"
                        multiline
                        rowsMax={4}
                        margin="normal"
                    />
                    <br/>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Muscles</InputLabel>
                        <Select
                            native
                            value={exercise.muscles}
                            onChange={handleChange}
                            inputProps={{
                                id: 'muscles'
                            }}
                            >
                            <option key="" value=""> </option>
                            {muscles.map(muscle => 
                                <option key={muscle} value={muscle}>{muscle}</option>
                            )}
                        </Select>
                    </FormControl>
                    <br />
                    <Button 
                        onClick={handleSubmit}
                        variant="contained" 
                        color="primary"
                    >
                        {prevExercise ? 'Edit' : 'Create' }
                    </Button>
    </form>
}