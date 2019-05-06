import React from 'react';

const OrderForm = ({ cart }) => {
  const renderCart = cart.map(cartItem =>
    <>
      <p key={cartItem.id}>{cartItem.name} - {cartItem.price}</p>
      {/*<button key={cartItem.id} type="submit">Add to Cart</button>*/}
    </>
  )

    return (
      <div>
        <h2>Items in Cart</h2>
        {renderCart}
      </div>
    )
  }

export default OrderForm;
