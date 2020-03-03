import React from 'react';
import Product from './App/Models/Product/product'
import './App.css';

function App() {

  const product = {
    title: "Nike",
    image: "https://s3.amazonaws.com/nikeinc/assets/86098/AM180-BLN-02_square_1600.jpg",
    price: 1200,
    description: "Description Nike, Description Nike, Description Nike",
    timeDate: new Date().getTime
  }

  return (
    <div className="main-container">
      <Product product={product}/>
    </div>
  );
}

export default App;
