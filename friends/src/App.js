import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendCard from './components/FriendCard';
import FriendForm from './components/FriendForm';

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
    const friend = {};
    event.target.querySelectorAll('input').forEach(e => friend[e.name] = e.value);
    friend.name && friend.age && friend.email
      && axios.post('http://localhost:5000/friends', friend)
      .then(_ => this.getFriends())
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        {this.state.friends
         && this.state.friends.map(f => <FriendCard key={f.id} friend={f} />)}
        <FriendForm onSubmit={this.addFriend} buttonText="Add Friend"/>
      </div>
    );
  }
}

export default App;
