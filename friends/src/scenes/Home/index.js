import React from 'react';
import FriendCard from '../../components/FriendCard';
import { Link } from 'react-router-dom';
import './Home.scss';
import { ReactComponent as Plus } from './plus.svg';

const Home = ({friends, handleRemove, handleEdit, history}) => {
  return (
    <div className="home">
      <Link to="/add" className="add"> <Plus/> </Link>
      <h1>Friends</h1>
      {friends
       ? friends.map(f => <FriendCard key={f.id}
                                      friend={f}
                                      handleRemove={handleRemove}
                                      history={history}
                                      handleEdit={handleEdit}/>)
       : <div>Loading...</div>}
    </div>
  );
};

export default Home;
