import React from 'react';

const Dishes = ({ dishes }) => {
  const renderDishes = dishes.map(dish =>
    <p key={dish.id}>{dish.name} - {dish.price}</p>
  )

  return (
    <div>
      <h2>Menu</h2>
      {renderDishes}
    </div>
  )
}

export default Dishes;
