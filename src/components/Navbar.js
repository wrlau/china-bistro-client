import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <button><NavLink to="/">Home</NavLink></button>
      <button><NavLink to="/menu">Menu</NavLink></button>
      <button><NavLink to="/order/new">Cart</NavLink></button>
    </div>
  );
}

export default Navbar;
