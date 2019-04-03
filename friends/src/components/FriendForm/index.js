import React from 'react';

const FriendForm = ({onSubmit, buttonText}) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="name" />
      <input type="number" name="age" placeholder="age" />
      <input type="email" name="email" placeholder="email" />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default FriendForm;
