import React from 'react';

const FriendCard = ({friend}) => {
  const { name, age, email } = friend;
  return (
    <div>
      <h3>{name}</h3>
      <h4>{age}</h4>
      <h5>{email}</h5>
    </div>
  );
};

export default FriendCard;
