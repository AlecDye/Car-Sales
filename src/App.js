import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = ({ state }) => {
  console.log("state", state)
  const { car, additionalPrice, additionalFeatures } = state;

  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  // };

  // const buyItem = item => {
  //   // dispatch an action here to add an item
  // };
  // console.log("app", props)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} />
        <Total car={car} additionalPrice={additionalPrice} />
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
