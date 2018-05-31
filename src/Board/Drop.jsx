import React from 'react';
import { PropTypes } from 'prop-types';

const Drop = ({ color, shape }) => (
  <div className="board__drops__drop">
    <div
      style={{ backgroundColor: color }}
      className="board__drops__drop__source"
    />
    <div className={`board__drops__drop__target board__drops__drop__target--${shape}`} />
  </div>
);

Drop.propTypes = {
  color: PropTypes.string.isRequired,
  shape: PropTypes.string.isRequired,
};

export default Drop;
