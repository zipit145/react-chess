import React from 'react';

const Sidebar = (props) => {
    return (
      <div className="sidebar">
        <div>
            current piece: {props.selectedPieceSymbol}
        </div>
        <div>
            current player: {props.currentPlayer ? 1 : 2}
        </div>
          <p className="instructions">Instructions: This Game is designed to be played on one computer, please reload the page if you would like to play again</p>

      </div>
    )
  }
  
  export default Sidebar