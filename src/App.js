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
      input: [],
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false,
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
            hasMoved: false,
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
            hasMoved: false,
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
            hasMoved: false,
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
            hasMoved: false,
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
            hasMoved: false,
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
            hasMoved: false,
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
            hasMoved: false,
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
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
            hasMoved: false
          }
        },
      ]
    }
    this.movePieces= this.movePieces.bind(this)
  }
  inputHandler = (id) => {
    let x;
    let y;
    if(id%8 !== 0) {
      x = id%8
    } else {
      x = 8
    }
    if(id%8 !== 0) {
      if((id/8) < Math.round(id/8)){
        y = Math.round(id/8)
      } else {
        y = Math.round(id/8)+1
      }
    } else {
      y = id/8
    }
      return [x, y]
  }

  knightMove = (id) => {
    let finish
    let returnVal = false;
    finish = this.state.positions.filter(position =>{
      if (position.id === Number(id)) {
        return position
      }
    })
    let y1 = this.state.input[0]
    let y2 = this.inputHandler(finish[0].id)[0]
    let x1 = this.state.input[1]
    let x2 = this.inputHandler(finish[0].id)[1]
    let deltaX = x1-x2
    let deltaY = y1-y2
    if(Math.abs(deltaX) === 2 && Math.abs(deltaY) === 1) {

    } else if (Math.abs(deltaX) === 1 && Math.abs(deltaY) === 2) {

    } else {
      return false
    }
    return true
  }

  horizMove = (finish,y1,y2) => {
    if (y1 > y2) {
      for (let i = y2+1; i<y1; i++) {
        for (let z = 0; z<64;z++) {
          if(this.state.positions[z].id === this.inputConverter([i,this.state.input[1]]) && this.state.positions[z].pieceOccupied) {
            console.log(this.state.positions[z].id,"obstruction found")
            return false
          }

        }
      }
      return true
    } else if (y1 < y2) {
      for (let i = y1+1; i<y2; i++) {
        for (let z = 0; z<64;z++) {
          if(this.state.positions[z].id === this.inputConverter([i,this.state.input[1]]) && this.state.positions[z].pieceOccupied) {
            console.log(this.state.positions[z].id,"obstruction found1")
            return false
          }
        }
      }
      return true
    }
  }

  kingMove = (x1,y1,x2,y2) => {
    let deltaX = x1-x2
    let deltaY = y1-y2
    if(Math.abs(deltaX) < 2 && Math.abs(deltaY) < 2) {
      return true
    } else if (this.castleMove(x1,y1,x2,y2)) {
      //castle condition
    }
    console.log("king")
    return false
  }

  pawnKillCheck = (x2,y2) => {
    let finish
    finish = this.state.positions.filter(position =>{
      if (position.id === this.inputConverter([y2,x2])) {
        return position
      }
    })
    if ((this.state.pieceInHand.player !== finish[0].piece.player) && finish[0].pieceOccupied) {
      console.log(this.state.pieceInHand.player,finish[0].piece.player, "playerlogic")
      return true
    }  else {
      console.log(this.state.pieceInHand.player,finish[0].piece.player, "playerlogic")
      return false
    }
  }
  pawnMove = (x1,x2,y1,y2) => {
    console.log(x1,x2,y1,y2)
    let deltaX = x1-x2
    let deltaY = y1-y2
    console.log("deltaX", deltaX)
    console.log("deltaY", deltaY)
    if(y1 === y2 && Math.abs(x1-x2) ===1) {
      //normal move
      console.log("normal move")
      return true
    } else if (y1 === y2 && Math.abs(x1-x2) ===2 && !this.state.pieceInHand.hasMoved) {
      return true
    } else if (Math.abs(deltaX) === Math.abs(deltaY) && Math.abs(deltaX) && Math.abs(deltaY) === 1 && this.pawnKillCheck(x2,y2)) {
      return true
    }
    console.log("for")
    return false
  }

  vertMove = (finish,x1,x2) => {
    if (x1 > x2) {
      for (let i = x2+1; i<x1; i++) {
        for (let z = 0; z<64;z++) {
          if(this.state.positions[z].id === this.inputConverter([this.state.input[0],i]) && this.state.positions[z].pieceOccupied) {
            console.log(this.state.positions[z].id,"obstruction found")
            return false
          }
        }
      }
      return true
    } else if (x1 < x2) {
      for (let i = x1+1; i<x2; i++) {
        for (let z = 0; z<64;z++) {
          if(this.state.positions[z].id === this.inputConverter([this.state.input[0],i]) && this.state.positions[z].pieceOccupied) {
            console.log(this.state.positions[z].id,"obstruction found1")
            return false
          }
        }
      }
      return true
    }
  }
  diagMove = (x1,x2,y1,y2) => {
    let deltaX = x1-x2
    let deltaY = y1-y2
    let xValues = []
    let yValues = []
    console.log(x1,"x1", x2, "x2")
    if(deltaX<0 && deltaY>0){
      for(let i = y1-1; i>y2; i--) {
        yValues.push(i)
      }
      for(let z=x1+1;z<x2;z++) {
        xValues.push(z)
        console.log(z,"x")
      }
      for(let j=0; j<xValues.length;j++) {
        for(let x = 0; x<64;x++){
          if(this.state.positions[x].id === this.inputConverter([yValues[j],xValues[j]]) && this.state.positions[x].pieceOccupied){
            console.log(this.state.positions[x].id, "obstruction found")
            return false
          }
        }
        console.log([yValues[j],xValues[j]], "final for diag")
      }
      return true
    } else if (deltaX<0 && deltaY<0){
      for(let i = y1+1; i<y2; i++) {
        yValues.push(i)// array methods or array fill stuff that dan mentioned
      }
      for(let z=x1+1;z<x2;z++) {
        xValues.push(z)
      }
      for(let j=0; j<xValues.length;j++) {
        for(let x = 0; x<64;x++){
          if(this.state.positions[x].id === this.inputConverter([yValues[j],xValues[j]]) && this.state.positions[x].pieceOccupied){
            console.log(this.state.positions[x].id, "obstruction found")
            return false
          }
        }
        console.log([yValues[j],xValues[j]], "final for diag")
      }
      return true
    } else if (deltaX>0 && deltaY>0){
      for(let i = y1-1; i>y2; i--) {
        yValues.push(i)
      }
      for(let z=x1-1;z>x2;z--) {
        xValues.push(z)
      }
      for(let j=0; j<xValues.length;j++) {
        for(let x = 0; x<64;x++){
          if(this.state.positions[x].id === this.inputConverter([yValues[j],xValues[j]]) && this.state.positions[x].pieceOccupied){
            console.log(this.state.positions[x].id, "obstruction found")
            return false
          }
        }
        console.log([yValues[j],xValues[j]], "final for diag")
      }
      return true
    } else if (deltaX>0 && deltaY<0){
      for(let i = y1+1; i<y2; i++) {
        yValues.push(i)
      }
      for(let z=x1-1;z>x2;z--) {
        xValues.push(z)
      }
      for(let j=0; j<xValues.length;j++) {
        for(let x = 0; x<64;x++){
          if(this.state.positions[x].id === this.inputConverter([yValues[j],xValues[j]]) && this.state.positions[x].pieceOccupied){
            console.log(this.state.positions[x].id, "obstruction found")
            return false
          }
        }
        console.log([yValues[j],xValues[j]], "final for diag")
      }
      return true
    }
    console.log("diag")
    return true
  }

  castleMove = (x1,y1,x2,y2) => {
    //let rook = this.state.positions.filter(position => position.id ===this.inputConverter([y1,x1]))
    if(y1-y2 > 0){
      let rook = this.state.positions.filter( position => {
       return position.id === (this.state.currentPlayer? 1 : 57)
      })
       console.log(rook)
      console.log("castle to the left")
      if((Math.abs(y1-y2)===2) && (x1===x2) && (this.state.pieceInHand.type === "king") && (!this.state.pieceInHand.hasMoved) && (!rook[0].piece.hasMoved)){
        console.log("valid castle left")
      } else {
        console.log("to big or small for castle")
      }
    } else {
      let rook = this.state.positions.filter( position => {
        return position.id === (this.state.currentPlayer? 8 : 64)
       })
      console.log("Castle to the right")
      if((Math.abs(y1-y2)===2) && (x1===x2) && (this.state.pieceInHand.type === "king") && (!this.state.pieceInHand.hasMoved) && (!rook[0].piece.hasMoved)){
        console.log("valid castle right")
      } else {
        console.log("to big or small for castle")
      }
    }
    //king has not moved
    //rook has not moved/ how do I find the right one
    //both destinations are open
    //king moves two spaces to the left or right from start
    // console.log(x1,y1,x2,y2,Math.abs(y1-y2))
    // if((Math.abs(y1-y2)===2) && (x1===x2) && (this.state.pieceInHand.type === "king") && (!this.state.pieceInHand.hasMoved)){
    //   console.log("valid castle")
    // } else {
    //   console.log("to big or small for castle")
    // }
    console.log("castle move")
    // let rook
    // rook = this.state.positions.filter(position => {
    //   position.id === this.inputConverter([x2,y2])
    // })
    //  console.log(rook)
     return true
  }

  obstructedConstrainedMove = (id) => {
    console.log("you ran the obstructed function!")
    let finish
    let returnVal = false;
    finish = this.state.positions.filter(position =>{
      if (position.id === Number(id)) {
        return position
      }
    })
    let y1 = this.state.input[0]
    let y2 = this.inputHandler(finish[0].id)[0]
    let x1 = this.state.input[1]
    let x2 = this.inputHandler(finish[0].id)[1]

    if (y1 === y2) {
      if(this.vertMove(finish, x1, x2) && this.state.pieceInHand.type === "rook") {
        console.log("success")
        return true
      } else {
        return false
      }
    } else if (x1 === x2) {
      if(this.horizMove(finish, y1, y2)) {
        return true
      } else {
        return false
      }

    } else if (Math.abs(x1-x2) === Math.abs(y1-y2)) {
      if(this.diagMove(x1,x2,y1,y2)){
        return true
      } else {
        return false
      }

    }
  }

  notMyOwnPiece = (input1) => {
    let finish
    finish = this.state.positions.filter(position =>{
      if (position.id === Number(input1)) {
        return position
      }
    })
    if (this.state.pieceInHand.player === finish[0].piece.player) {
      return false
    } else {
      return true
    }
  }
  pieceMove = (id) => {
    let finish
    let returnVal = false;
    finish = this.state.positions.filter(position =>{
      if (position.id === Number(id)) {
        return position
      }
    })
    let y1 = this.state.input[0]
    let y2 = this.inputHandler(finish[0].id)[0]
    let x1 = this.state.input[1]
    let x2 = this.inputHandler(finish[0].id)[1]
    switch(this.state.pieceInHand.type) {
      case "pawn":
            if(this.pawnMove(x1, x2, y1, y2)) {
              return true
            } else {
              return false
            }
      case "rook":
          if (y1 === y2) {
            if(this.vertMove(finish, x1, x2)) {
              return true
            } else {
              return false
            }
          } else if (x1 === x2) {
            if(this.horizMove(finish, y1, y2)) {
              return true
            } else {
              return false
            }
          } else {
            return false
          }
      case "knight":
        var result = this.knightMove(id)
        if(result){
          return true 
        } else {
          return false
        }
      case "bishop":
        if (Math.abs(x1-x2) === Math.abs(y1-y2)) {
          if(this.diagMove(x1,x2,y1,y2)){
            return true
          } else {
            return false
          }
        } else {
          return false
        }
          break;
      case "queen":
      if (y1 === y2) {
        if(this.vertMove(finish, x1, x2)) {
          console.log("success")
          return true
        } else {
          return false
        }
      } else if (x1 === x2) {
        if(this.horizMove(finish, y1, y2)) {
          return true
        } else {
          return false
        }
  
      } else if (Math.abs(x1-x2) === Math.abs(y1-y2)) {
        if(this.diagMove(x1,x2,y1,y2)){
          return true
        } else {
          return false
        }
      } else {
        return false
      }
          break;
      case "king":
      if (this.kingMove(x1,y1,x2,y2)) {
        return true
      }
      return false
          break;
      default:
      return false
    }
  }

  inputConverter = (input) => {
    let output = Number(((input[1]-1)*8) + input[0])
    return output
  }

  movePieces = (e) => {
    let input1 = this.state.input
    let input = this.inputHandler(e.target.id)
    let output = this.inputConverter(input)
    let selection = this.state.positions.filter(piece => piece.pieceOccupied === true && piece.piece.player === this.state.currentPlayer && piece.id === Number(e.target.id))
    let piece = selection[0]
    if(selection.length > 0 && this.state.selectPiece === true){
        this.setState({input: input})
        this.setState({selectedPiece: piece.piece.id})
        this.setState({selectedPieceSymbol: piece.piece.type[0]})
        this.setState({pieceInHand: piece.piece})
        piece.piece = {}
        piece.pieceOccupied = false
      this.setState({selectPiece: this.state.selectPiece ? false : true})
    } else if (this.state.selectPiece === false && this.notMyOwnPiece(e.target.id) && this.pieceMove(e.target.id)){
      this.setState({input: []})
      this.state.positions.filter(piece => {
        if(piece.id == e.target.id) {
          piece.piece = this.state.pieceInHand
          piece.pieceOccupied = true
          piece.piece.hasMoved = true

        }
      })
      this.setState({pieceInHand: {}})
      this.setState({selectedPiece: null})
      this.setState({selectedPieceSymbol: ""})
      this.setState({currentPlayer: this.state.currentPlayer ? false : true})
      this.setState({selectPiece: this.state.selectPiece ? false : true})
      this.setBoard()
    } else if(Number(e.target.id) === this.inputConverter(this.state.input)) {
      this.setState({input: []})
      this.state.positions.filter(piece => {
        if(piece.id == e.target.id) {
          piece.piece = this.state.pieceInHand
          piece.pieceOccupied = true
          piece.piece.hasMoved = true

        }
      })
      this.setState({pieceInHand: {}})
      this.setState({selectedPiece: null})
      this.setState({selectedPieceSymbol: ""})
      //this.setState({currentPlayer: this.state.currentPlayer ? false : true})
      this.setState({selectPiece: this.state.selectPiece ? false : true})
      this.setBoard()
    } else {
      console.log(Number(e.target.id),this.inputConverter(this.state.input))
      alert("invalid selection")
    }
  }
  movePieces2 = (e) => {
    this.setState({inputPosition: e.target.id})
    console.log("State answer" +this.state.inputX,this.state.inputY)
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
      this.setState({selectedPiece: null})
      this.setState({selectedPieceSymbol: ""})
      this.setState({currentPlayer: this.state.currentPlayer ? false : true})
      console.log(piece)
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
