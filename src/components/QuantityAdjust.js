import React from 'react';

function QuantityAdjust({ quantity, onQuantityChange }) {
  const decreaseQuantity = () => {
    if (quantity > 1) onQuantityChange(quantity - 1);
  };

  const increaseQuantity = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="QuantityAdjust">
      <h3>Quantity</h3>
      <button onClick={decreaseQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
}

export default QuantityAdjust;
