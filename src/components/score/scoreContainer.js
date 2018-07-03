import React from 'react';
import { connect } from 'react-redux';

import ScoreItem from './scoreItem';
import ScoreSummary from './scoreSummary';

const ScoreContainer = ({ items }) => {
  const scoreItems = Object.entries(items).map(entry => (
    <ScoreItem key={entry[0]} itemId={entry[0]} item={entry[1]} />
  ));
  return (
    <div className="ScoreContainer">
      <h2 className="container-title">Player items </h2>
      <table className="scoreItems">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>{scoreItems}</tbody>
      </table>
      <ScoreSummary />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => state.items;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreContainer);
