import React from 'react';
import axios from 'axios';

class SearchExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query:''
    };
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          Enter Your Exercise:
          <input type="text"/>
          <input type="submit"/> 
        </form>
      </div>
    );
  }

}

export default SearchExercise;