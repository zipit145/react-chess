import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
import Sidebar from './components/Sidebar'


class App extends Component {

  constructor (props) {
    super();
    this.state ={
      currentPlayer: true,
      activeGame: true,
      selectPiece: true,
      selectedPiece: null,
      selectedPieceSymbol: "",
      inputPosition: null,
      inputX: null,
      inputY: null,
      firstClick: null,
      secondClick: null,
      pieceInHand: {},
      positions: [
        {
          id:1,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 1,
            type: "rook",
            player: true,
            inPlay: true,
          }
        },
        {
          id:2,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 2,
            type: "knight",
            player: true,
            inPlay: true,
          }
        },
        {
          id:3,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 3,
            type: "bishop",
            player: true,
            inPlay: true,
          }
        },
        {
          id:4,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 4,
            type: "queen",
            player: true,
            inPlay: true,
          }
        },
        {
          id: 5,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 5,
            type: "king",
            player: true,
            inPlay: true,
          }
        },
        {
          id: 6,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 6,
            type: "bishop",
            player: true,
            inPlay: true,
          }
        },
        {
          id: 7,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 7,
            type: "knight",
            player: true,
            inPlay: true,
          }
        },
        {
          id: 8,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 8,
            type: "rook",
            player: true,
            inPlay: true,
            king: false,
          }
        },
        {
          id:9,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 9,
            type: "pawn",
            player: true,
            inPlay: true,
            king: false,
          }
        },
        {
          id:10,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 10,
            type: "pawn",
            player: true,
            inPlay: true,
            king: false,
          }
        },
        {
          id:11,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 3,
            type: "pawn",
            player: true,
            inPlay: true,
            king: false,
          }
        },
        {
          id:12,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 12,
            type: "pawn",
            player: true,
            inPlay: true,
            king: false,
          }
        },
        {
          id: 13,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 13,
            type: "pawn",
            player: true,
            inPlay: true,
            king: false,
          }
        },
        {
          id: 14,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 14,
            type: "pawn",
            player: true,
            inPlay: true,
            king: false,
          }
        },
        {
          id: 15,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 15,
            type: "pawn",
            player: true,
            inPlay: true,
            king: false,
          }
        },
        {
          id: 16,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 16,
            type: "pawn",
            player: true,
            inPlay: true,
            king: false,
          }
        },
        {
          id:17,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:18,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:19,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:20,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:21,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:22,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:23,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:24,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:25,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:26,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:27,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:28,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:29,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:30,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:31,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:32,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:33,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:34,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:35,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:36,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:37,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:38,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:39,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:40,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:41,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:42,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:43,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:44,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:45,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:46,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:47,
          pieceOccupied: false,
          spaceColor: false,
          piece: {}
        },
        {
          id:48,
          pieceOccupied: false,
          spaceColor: true,
          piece: {}
        },
        {
          id:49,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 49,
            type: "pawn",
            player: false,
            inPlay: true,
          }
        },
        {
          id:50,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 50,
            type: "pawn",
            player: false,
            inPlay: true,
          }
        },
        {
          id:51,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 51,
            type: "pawn",
            player: false,
            inPlay: true,
          }
        },
        {
          id:52,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 52,
            type: "pawn",
            player: false,
            inPlay: true,
          }
        },
        {
          id: 53,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 54,
            type: "pawn",
            player: false,
            inPlay: true,
          }
        },
        {
          id: 54,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 54,
            type: "pawn",
            player: false,
            inPlay: true,
          }
        },
        {
          id: 55,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 7,
            type: "pawn",
            player: false,
            inPlay: true,
          }
        },
        {
          id:56,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 56,
            type: "pawn",
            player: false,
            inPlay: true,
          }
        },
        {
          id:57,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 57,
            type: "rook",
            player: false,
            inPlay: true,
          }
        },
        {
          id:58,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 58,
            type: "knight",
            player: false,
            inPlay: true,
          }
        },
        {
          id:59,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 59,
            type: "bishop",
            player: false,
            inPlay: true,
          }
        },
        {
          id:60,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 60,
            type: "queen",
            player: false,
            inPlay: true,
          }
        },
        {
          id: 61,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 61,
            type: "king",
            player: false,
            inPlay: true,
          }
        },
        {
          id: 62,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 62,
            type: "bishop",
            player: false,
            inPlay: true,
          }
        },
        {
          id: 63,
          pieceOccupied: true,
          spaceColor: false,
          piece: {
            id: 63,
            type: "knight",
            player: false,
            inPlay: true,
          }
        },
        {
          id: 64,
          pieceOccupied: true,
          spaceColor: true,
          piece: {
            id: 64,
            type: "rook",
            player: false,
            inPlay: true,
          }
        },
      ],
      pieces: [
        {
          id: 1,
          type: "pawn",
          position: 9,
          player: true,
          inPlay: true,
          king: false,
        },
        {
          id: 2,
          type: "pawn",
          position: 10,
          player: true,
          inPlay: true,
          king: false
        },
        {
          id: 3,
          type: "pawn",
          position: 11,
          player: true,
          inPlay: true,
          king: false
        },
        {
          id: 4,
          type: "pawn",
          position: 12,
          player: true,
          inPlay: true,
          king: false
        },
        {
          id: 5,
          type: "pawn",
          position: 13,
          player: true,
          inPlay: true,
          king: false
        },
        {
          id: 6,
          type: "pawn",
          position: 14,
          player: true,
          inPlay: true,
          king: false
        },
        {
          id: 7,
          type: "pawn",
          position: 15,
          player: true,
          inPlay: true,
          king: false
        },
        {
          id: 8,
          type: "pawn",
          position: 16,
          player: true,
          inPlay: true,
          king: false
        },
        {
          id: 9,
          type: "pawn",
          position: 49,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 10,
          type: "pawn",
          position: 50,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 11,
          type: "pawn",
          position: 51,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 12,
          type: "pawn",
          position: 52,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 13,
          type: "pawn",
          position: 53,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 14,
          type: "pawn",
          position: 54,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 15,
          type: "pawn",
          position: 55,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 16,
          type: "pawn",
          position: 56,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 17,
          type: "rook",
          position: 1,
          player: true,
          inPlay: true,
          king: false
        },
        {
          id: 18,
          type: "rook",
          position: 8,
          player: true,
          inPlay: true,
          king: false
        },
        {
          id: 19,
          type: "knight",
          position: 2,
          player: true,
          inPlay: true,
          king: false
        },
        {
          id: 20,
          type: "knight",
          position: 7,
          player: true,
          inPlay: true,
          king: false
        },
        {
          id: 21,
          type: "bishop",
          position: 3,
          player: true,
          inPlay: true,
          king: false
        },
        {
          id: 22,
          type: "bishop",
          position: 6,
          player: true,
          inPlay: true,
          king: false
        },
        {
          id: 23,
          type: "queen",
          position: 4,
          player: true,
          inPlay: true,
          king: false
        },
        {
          id: 24,
          type: "king",
          position: 5,
          player: true,
          inPlay: true,
          king: true
        },
        {
          id: 25,
          type: "rook",
          position: 57,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 26,
          type: "rook",
          position: 64,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 27,
          type: "knight",
          position: 58,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 28,
          type: "knight",
          position: 63,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 29,
          type: "bishop",
          position: 59,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 30,
          type: "bishop",
          position: 62,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 31,
          type: "queen",
          position: 60,
          player: false,
          inPlay: true,
          king: false
        },
        {
          id: 32,
          type: "king",
          position: 61,
          player: false,
          inPlay: true,
          king: true,
        }
      ]
    }
    this.movePieces= this.movePieces.bind(this)
  }
  inputHandler = (e) => {
    console.log("right answer" + e%8, Math.round(e/8)+1)
     this.setState({
        inputX: e%8,
        inputY: Math.round(e/8)+1
      })
      //return x
  }
  movePieces = (e) => {
    // this.setState({inputPosition: e.target.id})
    // this.inputHandler(e.target.id)
    // console.log("State answer" +this.state.inputX,this.state.inputY)
    //console.log(x)
    console.log(e.target.id%8)
    console.log(Math.round(e.target.id/8)+1)
    console.log(e.target.id/8)
    let selection = this.state.positions.filter(piece => piece.pieceOccupied === true && piece.piece.player === this.state.currentPlayer && piece.id === Number(e.target.id))
    let piece = selection[0]
    console.log(selection)
    if(selection.length > 0 && this.state.selectPiece === true){
        this.setState({selectedPiece: piece.piece.id})
        this.setState({selectedPieceSymbol: piece.piece.type[0]})
        this.setState({pieceInHand: piece.piece})
        piece.piece = {}
        piece.pieceOccupied = false
        console.log(selection)
      this.setState({selectPiece: this.state.selectPiece ? false : true})
      console.log('here')
    } else if (this.state.selectPiece === false){
      this.state.positions.filter(piece => {
        if(piece.id == e.target.id) {
          console.log(piece.id)
          piece.piece = this.state.pieceInHand
          piece.pieceOccupied = true
          this.setState({pieceInHand: {}})
        }
      })
      //piece.position = e.target.id
      this.setState({selectedPiece: null})
      this.setState({selectedPieceSymbol: ""})
      this.setState({currentPlayer: this.state.currentPlayer ? false : true})
      //console.log(piece)
      //this.clearBoard()
      this.setState({selectPiece: this.state.selectPiece ? false : true})
      console.log("there")
      this.setBoard()
    } else {
      alert("please select a piece that belongs to you")
      console.log(selection)
      console.log(this.state.selectPiece)
    }
  }
  movePieces2 = (e) => {
    this.setState({inputPosition: e.target.id})
    // this.inputHandler(e.target.id)
    console.log("State answer" +this.state.inputX,this.state.inputY)
    //console.log(x)
    let selection = this.state.positions.filter(piece => piece.player === this.state.currentPlayer && piece.position === Number(e.target.id))
    let piece = selection[0]
    if(selection.length > 0 && this.state.selectPiece === true){
        this.setState({selectedPiece: piece.id})
        this.setState({selectedPieceSymbol: piece.type[0]})
        e.target.innerText = ''
        console.log(selection)
      this.setState({selectPiece: this.state.selectPiece ? false : true})
    } else if (this.state.selectPiece === false){
      this.state.pieces.filter(piece => {
        if(piece.id == this.state.selectedPiece) {
          piece.position = e.target.id
        }
      })
      //piece.position = e.target.id
      this.setState({selectedPiece: null})
      this.setState({selectedPieceSymbol: ""})
      this.setState({currentPlayer: this.state.currentPlayer ? false : true})
      console.log(piece)
      //this.clearBoard()
      this.setState({selectPiece: this.state.selectPiece ? false : true})
      this.setBoard()
    } else {
      alert("please select a piece that belongs to you")
      console.log(selection)
      console.log(this.state.selectPiece)
    }
  }
  clearBoard = () => this.state.pieces.map(gamespace => {
    let id= gamespace.position
    document.getElementById(id).innerText = ''
  })
  setBoard1 = () => {
    this.state.positions.map(gamespace => {
      let id= gamespace.id
      if (gamespace.pieceOccupied === true) {
        document.getElementById(id).innerText = gamespace.piece.type[0]
      }

    })
  }
  setBoard = () => {
    // let board = []
    let children = this.state.positions.map(gamespace => {
      if (gamespace.pieceOccupied === true) {
        return <div id={gamespace.id} class={"gameSpace " + (gamespace.piece.type) + (gamespace.piece.player ? " player1" : " player2") + (gamespace.spaceColor ? " white" : " black")} onClick={this.movePieces} >{gamespace.piece.type[0]}</div>
      } else  {
        return <div id={gamespace.id} class={"gameSpace"  + (gamespace.spaceColor ? " white" : " black")}onClick={this.movePieces}></div>
      }
    })
      // let children = []
      // for (let j = 0; j < 64; j++) {
      //   children.push(<div className="gameSpace " onClick={this.movePieces} id={j+1}></div>)
      // }
      return <div id="board">{children}</div>

    // return board
  }
  
  
  render() {
    return (
      <div className="App">
      
        <Board createTable={this.createTable} setBoard={this.setBoard} clearBoard={this.clearBoard} inputHandler={this.inputHandler}/>
        <Sidebar currentPlayer={this.state.currentPlayer} selectedPieceSymbol={this.state.selectedPieceSymbol}/>
      </div>
    );
  }
}

export default App;
