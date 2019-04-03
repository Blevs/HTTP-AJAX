import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomeLink.scss';

const HomeLink = () => {
  return (
    <NavLink exact to="/" className="home-link">⇠ Home</NavLink>
  );
};

export default HomeLink;
