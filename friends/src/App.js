import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendCard from './components/FriendCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: null
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(e => console.log(e));
  }
  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        {this.state.friends
         && this.state.friends.map(f => <FriendCard key={f.id} friend={f} />)}
      </div>
    );
  }
}

export default App;
