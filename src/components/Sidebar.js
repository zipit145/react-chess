import React from 'react';

const Sidebar = (props) => {
    return (
      <div>
        <div>
            current piece: {props.selectedPieceSymbol}
        </div>
        <div>
            current player: {props.currentPlayer ? 1 : 2}
        </div>
      </div>
    )
  }
  
  export default Sidebar