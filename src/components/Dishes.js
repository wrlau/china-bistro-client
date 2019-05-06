import React from 'react';

const Dishes = ({ dishes, handleClick }) => {

  const renderDishes = dishes.map(dish =>
    <>
      <p key={dish.id}>{dish.name} - {dish.price}</p>
      <button key={dish.id} type="submit" onClick={() => handleClick(dish)}>Add to Cart</button>
    </>
  )

  return (
    <div>
      <h2>Menu</h2>
      {renderDishes}
    </div>
  )
}

export default Dishes;
