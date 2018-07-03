import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../actions/actions';

export const AddItemButton = ({ addItem, itemId }) => {
  const onAddItemClick = event => {
    addItem(itemId);
  };

  return (
    <button className="add-item-button" value={itemId} onClick={onAddItemClick}>
      {itemId}
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: itemId => dispatch(addItem(itemId))
});

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItemButton);
