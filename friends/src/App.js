import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import Home from './scenes/Home';
import Add from './scenes/Add';
import Edit from './scenes/Edit';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: null,
      addInput: {},
      editInput: {}
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
  inputHandlerFactory = (key) => event => {
    const name = event.target.name, value = event.target.value;
    this.setState(prevState => (
      {[key]: {...prevState[key], [name]: value}}
    ));
  };
  handleAddInput = this.inputHandlerFactory("addInput");
  addFriend = event => {
    event.preventDefault();
    const friend = this.state.addInput;
    friend.name && friend.age && friend.email
      && axios.post('http://localhost:5000/friends', friend)
      .then(res => this.setState({friends: res.data}))
      .catch(error => console.log(error));
    this.setState({addInput: {}});
  };
  removeFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({friends: res.data}))
      .catch(error => console.log(error));
  };
  handleEditInput = this.inputHandlerFactory("editInput");
  editFriend = event => {
    event.preventDefault();
    const friend = this.state.editInput;
    axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => this.setState({friends: res.data}))
      .catch(error => console.log(error));
  };
  initEdit = id => {
    const intid = parseInt(id);
    // FIXME: This is a hack because I'm not sure how handle a refresh on this
    // page resulting in it attempting to get a friend before the api request
    // has finished.
    // My current line of thinking is to use a useEffect hook on
    // this.state.friends as a parameter, but then an update somewhere else
    // causing that to change would overwrite any current values.
    axios.get(`http://localhost:5000/friends`)
      .then(res => this.setState({editInput: res.data.find(f => f.id === intid)}))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <header><NavLink to="/">Home</NavLink><NavLink to="/add">Add Friend</NavLink></header>
        <Route exact path="/" render={props => <Home {...props}
                                                     friends={this.state.friends}
                                                     handleRemove={this.removeFriend}
                                                     handleEdit={this.navEditFriend} />}/>
        <Route path="/add" render={props => <Add {...props}
                                                 handleInput={this.handleAddInput}
                                                 onSubmit={this.addFriend}
                                                 values={this.state.addInput} />}/>
        <Route path="/edit/:id" render={props => <Edit {...props}
                                                       onSubmit={this.editFriend}
                                                       handleInput={this.handleEditInput}
                                                       values={this.state.editInput}
                                                       initEdit={this.initEdit} />}/>
      </div>
    );
  }
}

export default App;
