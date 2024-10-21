import React from 'react'
import image from '../images/image.jpg'

function Header({ title }) {
  return (
    <header className="App-header">
      <img 
        src={image}
        alt="Product logo" 
        className="header-image"
        style={{ width: '200px', height: '200px' }}
      />
      <h1>{title}</h1>
    </header>
  );
}
export default Header
