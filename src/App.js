import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = ({ state }) => {
  // console.log("state", state)
  const { car, additionalPrice, additionalFeatures } = state;

  return (
    <div className="boxes">
      <div className="box">
        <Header state={state} />
        <AddedFeatures state={state} />
      </div>
      <div className="box">
        <AdditionalFeatures state={state} />
        <Total state={state} />
      </div>
    </div>
  );
};

//! mapStateToProps
const mapStateToProps = state => {
  return {
    state
    // additionalPrice: state.additionalPrice,
    // car: state.car,
    // additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {})(App);
