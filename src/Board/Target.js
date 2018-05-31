import React from 'react';
import { DropTarget } from 'react-dnd';
import { PropTypes } from 'prop-types';
import { ITEM } from './itemTypes';

const Target = ({ connectDropTarget, shape }) => (
  connectDropTarget(<div className={`board__targets__target board__targets__target--${shape}`} />)
);

Target.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
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
});

export default DropTarget(ITEM, target, collect)(Target);
