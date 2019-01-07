import React from 'react';

const Board = (props) => {
    return (
      <div className="mainBox">
        {props.setBoard()}
      </div>
    )
  }
  
  export default Board