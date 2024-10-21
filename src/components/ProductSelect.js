import React from 'react';

function ProductSelect({ products, selectedProduct, onProductChange }) {
  return (
    <div className="ProductSelect">
      <h2>Select product</h2>
      <label>Product: </label>
      <select 
        value={selectedProduct.name} 
        onChange={(e) => onProductChange(products.find(p => p.name === e.target.value))}
      >
        {products.map((product, index) => (
          <option key={index} value={product.name}>
            {product.name} ({product.price}€)
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProductSelect;
