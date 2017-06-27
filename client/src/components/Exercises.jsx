import React from 'react';
import ExerciseEntry from './ExerciseEntry.jsx';

const Exercises = (props) => (
  <div>
    <h4>Exercises You've Done Today: </h4>
    <ExerciseEntry exercise={'push ups'} />
    <ExerciseEntry exercise={'yoga'} />
  </div>
);

export default Exercises;