import React from 'react';
import axios from 'axios';

class SearchExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  handleClick(event) {
    event.preventDefault();
    axios.get('/exercise', {
      params: {
        userExercise: 'ran 3 miles'
      }
    })
    .then(res => {
      console.log('fetch successful!', res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <form>
          Enter Your Exercise: 
          <input type="text" value={this.state.query} onChange={this.handleChange.bind(this)}/>
          <input type="submit" onClick={this.handleClick.bind(this)}/> 
        </form>
      </div>
    );
  }

}

export default SearchExercise;