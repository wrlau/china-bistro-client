import React from 'react';

const Dish = props => {
  return (
    <p key={props.id}>{props.name} - {props.price}</p>
  );
};

export default Dish;
