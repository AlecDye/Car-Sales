import React from 'react';
import { addFeature } from '../actions/addAction';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={props.addFeature({})}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    state,
    action: addFeature
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
