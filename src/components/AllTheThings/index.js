import React from 'react';

function AllTheThings(props) {

  const things = props.products.map((element, index) => {
    return (
      <li key={index} onClick={() => props.handleClick(element)} >
        {element.name} {'$' + element.price}
      </li>
    )
  })

  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      {things}
    </div>
  );
}

export default AllTheThings;