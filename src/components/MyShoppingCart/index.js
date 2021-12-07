import React from 'react';

function MyShoppingCart(props) {
  const cartItems = props.cart.map((element, x) => {
    return (
      <div className="MyShoppingCart">
        <li key={x} onClick={() => props.handleClick(x)} >
          {element.name} {'$' + element.price}
        </li>
      </div>
    );
  })
  return (
    <div className="MyShoppingCart">
      <h2> Your Cart</h2>
      {cartItems}
    </div>
  );
}

export default MyShoppingCart;
