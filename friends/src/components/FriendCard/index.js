import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Pencil } from './pencil.svg';
import './FriendCard.scss';

const FriendCard = ({friend, history, handleRemove, handleEdit}) => {
  const { name, age, email, id } = friend;
  return (
    <div className="friend-card">
      <h3>{name}</h3>
      <h4>{age}</h4>
      <h5>{email}</h5>
      <div className="remove" onClick={() => handleRemove(id)}>&times;</div>
      <Link className="edit" to={`/edit/${id}`}><Pencil/></Link>
    </div>
  );
};

export default FriendCard;
