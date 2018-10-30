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
      pieces: [
        {
          id: 1,
          type: "pawn",
          position: 9,
          player: true,
          inPlay: true
        },
        {
          id: 2,
          type: "pawn",
          position: 10,
          player: true,
          inPlay: true
        },
        {
          id: 3,
          type: "pawn",
          position: 11,
          player: true,
          inPlay: true
        },
        {
          id: 4,
          type: "pawn",
          position: 12,
          player: true,
          inPlay: true
        },
        {
          id: 5,
          type: "pawn",
          position: 13,
          player: true,
          inPlay: true
        },
        {
          id: 6,
          type: "pawn",
          position: 14,
          player: true,
          inPlay: true
        },
        {
          id: 7,
          type: "pawn",
          position: 15,
          player: true,
          inPlay: true
        },
        {
          id: 8,
          type: "pawn",
          position: 16,
          player: true,
          inPlay: true
        },
        {
          id: 9,
          type: "pawn",
          position: 49,
          player: false,
          inPlay: true
        },
        {
          id: 10,
          type: "pawn",
          position: 50,
          player: false,
          inPlay: true
        },
        {
          id: 11,
          type: "pawn",
          position: 51,
          player: false,
          inPlay: true
        },
        {
          id: 12,
          type: "pawn",
          position: 52,
          player: false,
          inPlay: true
        },
        {
          id: 13,
          type: "pawn",
          position: 53,
          player: false,
          inPlay: true
        },
        {
          id: 14,
          type: "pawn",
          position: 54,
          player: false,
          inPlay: true
        },
        {
          id: 15,
          type: "pawn",
          position: 55,
          player: false,
          inPlay: true
        },
        {
          id: 16,
          type: "pawn",
          position: 56,
          player: false,
          inPlay: true
        },
        {
          id: 17,
          type: "rook",
          position: 1,
          player: true,
          inPlay: true
        },
        {
          id: 18,
          type: "rook",
          position: 8,
          player: true,
          inPlay: true
        },
        {
          id: 19,
          type: "knight",
          position: 2,
          player: true,
          inPlay: true
        },
        {
          id: 20,
          type: "knight",
          position: 7,
          player: true,
          inPlay: true
        },
        {
          id: 21,
          type: "bishop",
          position: 3,
          player: true,
          inPlay: true
        },
        {
          id: 22,
          type: "bishop",
          position: 6,
          player: true,
          inPlay: true
        },
        {
          id: 23,
          type: "queen",
          position: 4,
          player: true,
          inPlay: true
        },
        {
          id: 24,
          type: "king",
          position: 5,
          player: true,
          inPlay: true
        },
        {
          id: 25,
          type: "rook",
          position: 57,
          player: false,
          inPlay: true
        },
        {
          id: 26,
          type: "rook",
          position: 64,
          player: false,
          inPlay: true
        },
        {
          id: 27,
          type: "knight",
          position: 58,
          player: false,
          inPlay: true
        },
        {
          id: 28,
          type: "knight",
          position: 63,
          player: false,
          inPlay: true
        },
        {
          id: 29,
          type: "bishop",
          position: 59,
          player: false,
          inPlay: true
        },
        {
          id: 30,
          type: "bishop",
          position: 62,
          player: false,
          inPlay: true
        },
        {
          id: 31,
          type: "queen",
          position: 60,
          player: false,
          inPlay: true
        },
        {
          id: 32,
          type: "king",
          position: 61,
          player: false,
          inPlay: true
        }
      ]
    }
  }
  inputHandler = (e) => {
    console.log(e%8,Math.round(e/8))
    this.setState({
      inputX: e%8,
      inputY: Math.round(e/8)
    })
      //return x
  }
  movePieces = (e) => {
    this.setState({inputPosition: e.target.id})
    this.inputHandler(e.target.id)
    console.log(this.state.inputX,this.state.inputY)
    //console.log(x)
    let selection = this.state.pieces.filter(piece => piece.player === this.state.currentPlayer && piece.position === Number(e.target.id))
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
    // movePieces = (e) => {
    //   let selection = this.state.pieces.filter(piece => piece.player === this.state.currentPlayer && piece.position === Number(e.target.id))
    //   if(selection.length > 0){
    //     console.log(selection)
    //     this.state.selectPiece ? this.state.pieces.filter(piece => {
    //       if(piece.position === Number(e.target.id)) {
    //         console.log(piece.player)
    //         console.log(this.state.currentPlayer)
    //         this.setState({selectedPiece: piece.id})
    //         this.setState({selectedPieceSymbol: piece.type[0]})
    //         e.target.innerText = ''
    //         console.log("select")
    //       }
    //     }) : this.state.pieces.filter(piece => {
    //       if(piece.id === this.state.selectedPiece) {
    //         piece.position = e.target.id
    //         this.setState({selectedPiece: null})
    //         this.setState({selectedPieceSymbol: ""})
    //         this.setState({currentPlayer: this.state.currentPlayer ? false : true})
    //         console.log(piece)
    //         //this.clearBoard()
    //         this.setBoard()
    //       }
    //     })
    //     this.setState({selectPiece: this.state.selectPiece ? false : true})
    //   } else {
    //     alert("here")
    //   }

  }
  clearBoard = () => this.state.pieces.map(piece => {
    let id= piece.position
    document.getElementById(id).innerText = ''
  })
  setBoard = () => {
    this.state.pieces.map(piece => {
      let id= piece.position
      document.getElementById(id).innerText = piece.type[0]
    })
  }
  createTable = () => {
    // let board = []
      let children = []
      for (let j = 0; j < 64; j++) {
        children.push(<div className="gameSpace" onClick={this.movePieces} id={j+1}></div>)
      }
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
