import React from 'react';

const FriendCard = ({friend, handleRemove}) => {
  const { name, age, email, id } = friend;
  return (
    <div>
      <h3>{name}</h3>
      <h4>{age}</h4>
      <h5>{email}</h5>
      <div onClick={() => handleRemove(id)}>&times;</div>
    </div>
  );
};

export default FriendCard;
