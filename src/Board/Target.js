import React from 'react';
import { DropTarget } from 'react-dnd';
import { PropTypes } from 'prop-types';
import { ITEM } from './itemTypes';

const Target = ({ connectDropTarget, highlighted, shape }) => (
  connectDropTarget(
    <div
      className={`board__targets__target board__targets__target--${shape}`}
      style={{ backgroundColor: highlighted ? 'black' : 'gray' }}
    />
  )
);

Target.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  highlighted: PropTypes.bool.isRequired,
  shape: PropTypes.string.isRequired,
}

const target = {
  drop(props) {
    const { shape } = props;
    return ({
      shape,
    });
  }
}

const collect = (connect,  monitor) => ({
  connectDropTarget: connect.dropTarget(),
  highlighted: monitor.canDrop(),
});

export default DropTarget(ITEM, target, collect)(Target);
