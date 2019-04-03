import React from 'react';
import './FriendForm.scss';

const FriendForm = ({onSubmit, buttonText, handleInput, values}) => {
  return (
    <form className="friend-form" onSubmit={onSubmit}>
      <input type="text"
             name="name"
             placeholder="name"
             onChange={handleInput}
             value={values["name"] || ""}/>
      <input type="number"
             name="age"
             placeholder="age"
             onChange={handleInput}
             value={values["age"] || ""}/>
      <input type="email"
             name="email"
             placeholder="email"
             onChange={handleInput}
             value={values["email"] || ""}/>
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default FriendForm;
