import React from 'react';

const Board = (props) => {
    return (
      <div>
        {props.createTable()}
        <button onClick={props.setBoard}>Start Game</button>
        <button onClick={props.clearBoard}>clear Game</button>
      </div>
    )
  }
  
  export default Board