import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemContainer from './components/input/itemContainer.js';
import ScoreContainer from './components/score/scoreContainer.js';

import './App.css';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemContainer />
        <ScoreContainer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
