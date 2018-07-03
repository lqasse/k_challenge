import React from 'react';
import { connect } from 'react-redux';

const ScoreItem = ({ itemId, item }) => {
  return (
    <tr className="ScoreItem">
      <td>{itemId}</td>
      <td> {item.count}</td>
      <td> {item.points}</td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreItem);
