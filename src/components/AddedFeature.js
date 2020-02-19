import React from 'react';

const AddedFeature = ({ state }) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {state.feature.name}
    </li>
  );
};

export default AddedFeature;
