import React from 'react';
import ExerciseEntry from './ExerciseEntry.jsx';

const Exercises = (props) => (
  <div>
    <h4>Exercises You've Done Today: </h4>
    {props.exercises.map(exercise => {
      return <ExerciseEntry exercise={exercise} />;
    })}
  </div>
);

export default Exercises;