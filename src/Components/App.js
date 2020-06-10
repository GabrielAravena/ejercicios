import React, { Component, Fragment } from 'react'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import Exercises from './Exercises'
import {muscles, exercises} from '../store'

export default class extends Component{
  state = {
    exercises,
    exercise: {},
    editMode: false,
    dialogMode: false,
  }

  getExercisesByMuscles(){
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const {muscles} = exercise

      exercises[muscles] = exercises[muscles]
      ? [...exercises[muscles], exercise]
      : [exercise]
      
      return exercises

      } , {})
      )
  }

  handleOpenDialog = () => {
    this.setState({
      dialogMode: !this.state.dialogMode
    })
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = id => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false,
    }))
  }

  handleExerciseCreate = exercise => {
    this.setState(({exercises}) => ({
      exercises: [...exercises, exercise],
      dialogMode: false
    }))
  }

  handleExerciseDeleted = id => {
    this.setState(({exercises}) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }))
  }

  handleExerciseEdited = id => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))
  }

  handleExerciseEdit = exercise => {
    this.setState(({exercises}) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id), 
        exercise],
      editMode: false,
      open: false
    }))
  }
    

  render(){
    {console.log(this.state.exercise)}
  const exercises = this.getExercisesByMuscles(),
  { category, exercise, editMode, dialogMode } = this.state
    return (
      <Fragment>
        <Header
          muscles={muscles}  
          onCreateExercise={this.handleExerciseCreate}
          dialogMode={dialogMode}
          openDialog={this.handleOpenDialog}
        />
        <Exercises
          muscles={muscles} 
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
          onDelete={this.handleExerciseDeleted}
          onSelectedEdit={this.handleExerciseEdited}
          editMode={editMode}
          onEdit={this.handleExerciseEdit}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
      )
  }
}
    

