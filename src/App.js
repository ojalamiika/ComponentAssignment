import React, { useState } from 'react';
import Header from './components/Header';
import ProductSelect from './components/ProductSelect';
import QuantityAdjust from './components/QuantityAdjust';
import OrderInfo from './components/OrderInfo';
import './App.css';

function App() {
  const products = [
    { name: "AMD Ryzen 5 3600", price: 245 },
    { name: "Intel i5 10600K", price: 275 },
    { name: "Intel i7 10700K", price: 375 }
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);

  const handleProductChange = (product) => {
    setSelectedProduct(product);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const totalPrice = selectedProduct.price * quantity;

  return (
    <div className="App">
      <Header title="Welcome to product page!" />
      <ProductSelect 
        products={products} 
        selectedProduct={selectedProduct} 
        onProductChange={handleProductChange} 
      />
      <QuantityAdjust 
        quantity={quantity} 
        onQuantityChange={handleQuantityChange} 
      />
      <OrderInfo 
        product={selectedProduct} 
        quantity={quantity} 
        totalPrice={totalPrice} 
      />
    </div>
  );
}

export default App;
