// import useState;
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);


  const addToCart = product => {
    setCart([...cart, product])
  }

  const removeFromCart = index => {
    const removeArr = cart.filter((element, x) => x !== index)
    setCart(removeArr)
  };

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form />
      <div className="products">
        <AllTheThings
          products={products}
          handleClick={addToCart}
        />
        <MyShoppingCart
          cart={cart}
          handleClick={removeFromCart}
        />
      </div>
    </div>
  );
}

