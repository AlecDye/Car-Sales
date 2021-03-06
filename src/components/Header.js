import React from 'react';


const Header = ({ state }) => {
  // console.log("Header", props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={state.image} alt={state.name} />
      </figure>
      <h2>{state.name}</h2>
      <p>Amount: ${state.price}</p>
    </>
  );
};

export default Header;
