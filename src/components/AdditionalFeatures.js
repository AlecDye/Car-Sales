import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = ({ state }) => {
  console.log("Additional Features", state)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {state.addReducer.additionalFeatures.length ? (
        <ol type="1">
          {state.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};

export default AdditionalFeatures;
