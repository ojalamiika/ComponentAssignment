import React from 'react';

function OrderInfo({ product, quantity, totalPrice }) {
  return (
    <div className="OrderInfo">
      <h2>Order info</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>{quantity}</td>
            <td>{totalPrice}€</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderInfo;
