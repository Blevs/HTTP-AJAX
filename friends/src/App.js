import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import Home from './scenes/Home';
import Add from './scenes/Add';

const extractSubmitValues = event => {
  const values = {};
  event.target.querySelectorAll('input').forEach(elem => values[elem.name] = elem.value);
  return values;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: null
    };
  }
  getFriends = () => {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(error => console.log(error));
  }
  componentDidMount() {
    this.getFriends();
  }
  addFriend = event => {
    event.preventDefault();
    const friend = extractSubmitValues(event);
    friend.name && friend.age && friend.email
      && axios.post('http://localhost:5000/friends', friend)
      .then(_ => this.getFriends())
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div className="App">
        <header><NavLink to="/">Home</NavLink><NavLink to="/add">Add Friend</NavLink></header>
        <Route exact path="/" render={props => <Home {...props} friends={this.state.friends} />}/>
        <Route path="/add" render={props => <Add {...props} onSubmit={this.addFriend} />}/>
      </div>
    );
  }
}

export default App;
