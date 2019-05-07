import React from 'react';

const OrderForm = ({ cart }) => {
  const renderCart = cart.map(cartItem =>
    <>
      <p key={cartItem.id}>{cartItem.name} - {cartItem.price}</p>
    </>
  )

    return (
      <div>
        <h2>Items in Cart</h2>
        {renderCart}
        {cart.length > 0 &&
          <button>Checkout</button>
        }
      </div>
    )
  }

export default OrderForm;
