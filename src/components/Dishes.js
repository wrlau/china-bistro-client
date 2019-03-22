import React, { Component } from 'react';

const Dishes = ({ dishes }) => {
  const renderDishes = dishes.map(dish =>
    <p key={dish.id}>{dish.name} - {dish.price}</p>
  )

  return (
    <div>
      {renderDishes}
    </div>
  )
}

export default Dishes;
