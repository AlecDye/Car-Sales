import React from 'react';

import AddedFeature from './AddedFeature';


const AddedFeatures = ({ state }) => {
  // console.log("AddedFeatures", state)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {state.addReducer.car.features.length ? (
        <ol type="1">
          {state.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )}
    </div>
  );
};

export default AddedFeatures;
