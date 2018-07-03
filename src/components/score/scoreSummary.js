import React from 'react';
import { connect } from 'react-redux';

import { resetItems } from '../../actions/actions';

const ScoreSummary = ({ resetItems, sumBonus, sumPoints }) => {
  return (
    <div className="ScoreSummary">
      <div className="bonus-container">Bonus {sumBonus}</div>
      <div className="sum-reset-container">
        <div>
          Total <br /> <div className="total-points">{sumPoints}</div>
        </div>
        <button onClick={resetItems}> Reset </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  resetItems: () => dispatch(resetItems())
});

const mapStateToProps = state => state.items;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreSummary);
