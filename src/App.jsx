import { Card } from 'flowbite-react';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './products/Home';
import Product from './products/Product';

const App = () => {
  const [cart , setCart]=useState([])
  function addToCart(item) {
  setCart([... cart,item])
  }
  return (

    <React.Fragment>
      <Header length={cart.length} cart={cart}/>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart}  />} />
        <Route path="/product" element={<Product addToCart={addToCart}  />} />

      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
