import React from 'react';
import { connect } from 'react-redux';
import { ItemPoints } from '../../itemPoints';

import AddItemButton from './addItemButton';

const ItemContainer = ({ addPoint }) => {
  return (
    <div className="ItemContainer">
      <h1 className="container-title app-title">Kahoot! POINTS </h1>
      <div className="item-button-container">
        {Object.keys(ItemPoints).map(item => (
          <AddItemButton key={item} itemId={item} />
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => {
  return state.items;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemContainer);
