import React from 'react';

const Total = ({ state }) => {
  // console.log("Total ", state)
  return (
    <div className="content">
      <h4>Total Amount: ${state.addReducer.car.price + state.addReducer.additionalPrice}</h4>
    </div>
  );
};

export default Total;
