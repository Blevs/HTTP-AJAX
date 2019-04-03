import React from 'react';
import FriendCard from '../../components/FriendCard';

const Home = ({friends, handleRemove, handleEdit, history}) => {
  return (
    <div>
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
