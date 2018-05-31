import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Drop from './Drop';
import Source from './Source';
import Target from './Target';
import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.state = {
      drops: [],
    };
  }

  handleDrop(color, shape) {
    const { drops } = this.state;
    const nextDrops = [...drops, {
      color,
      shape,
    }];
    this.setState({
      drops: nextDrops,
    });
  }

  render() {
    const { drops } = this.state;
    return (
      <div id="board">
        <div id="board__sources">
          <Source color="red" onDrop={this.handleDrop} />
          <Source color="green" onDrop={this.handleDrop} />
          <Source color="blue" onDrop={this.handleDrop} />
        </div>
        <div id="board__targets">
          <Target shape="circle" />
          <Target shape="square" />
        </div>
        <div id="board__drops">
          {drops.map((drop, i) => (
            <Drop
              color={drop.color}
              key={i}
              shape={drop.shape}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(Board);