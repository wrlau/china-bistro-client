import React from 'react';

const OrderForm = ({ cart, removeCartItem }) => {
  const renderCart = cart.map(cartItem =>
    <>
      <p key={cartItem.id}>{cartItem.name} - {cartItem.price}</p>
      <button type="submit" onClick={() => removeCartItem(cartItem.id)}>Remove Dish</button>
    </>
  )

    return (
      <div>
        <h2>Items in Cart</h2>
        {renderCart}
        <div>
        <p></p>
        {cart.length > 0 && <button>Checkout</button>}
        </div>
      </div>
    )
  }

export default OrderForm;
