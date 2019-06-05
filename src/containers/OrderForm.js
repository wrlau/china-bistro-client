import React from 'react';
import OrderConfirm from '../components/OrderConfirm';

const OrderForm = ({ cart, removeCartItem, checkout, showOrderConfirm, orderTotal }) => {

  const renderCart = cart.map(cartItem =>
    <>
      <p key={cartItem.id}>{cartItem.name} - {cartItem.price}</p>
      <button type="submit" onClick={() => removeCartItem(cartItem.id)}>Remove Dish</button>
    </>
  )

  return (
      <div>
        <h2>Cart Items</h2>
        {renderCart}
        <p>Order Total: ${orderTotal}</p>
        <div>
        {cart.length > 0 &&
          <button type="submit" onClick={() => checkout(cart)}>Checkout</button>}
        {showOrderConfirm ?
          <OrderConfirm /> : null
        }
        </div>
      </div>
    );
}

export default OrderForm;
