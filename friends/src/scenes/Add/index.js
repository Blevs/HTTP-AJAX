import React from 'react';
import FriendForm from '../../components/FriendForm';

const Add = ({onSubmit}) => {
  return (
    <div>
      <h1>Add Friend</h1>
      <FriendForm onSubmit={onSubmit} buttonText="Add Friend"/>
    </div>
  );
};

export default Add;
