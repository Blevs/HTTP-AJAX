import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = ({friend, history, handleRemove, handleEdit}) => {
  const { name, age, email, id } = friend;
  return (
    <div>
      <h3>{name}</h3>
      <h4>{age}</h4>
      <h5>{email}</h5>
      <div onClick={() => handleRemove(id)}>&times;</div>
      <Link to={`/edit/${id}`}>edit</Link>
    </div>
  );
};

export default FriendCard;
