import * as React from 'react';
import { useState, useEffect } from 'react';

import { Board } from './Board';
import { GameInfo } from './GameInfo';
import { GameState, History } from '../state/types';

const isXNext = (i: number) => i % 2 == 1;

const initval: GameState = {
  history: [new History(Array(9).fill(null))],
  stepNumber: 0,
  xIsNext: isXNext(0),
  winner: ""
};

const Game = () => {
  const [gameState, setGameStae] = useState(initval);
  const { history, stepNumber, xIsNext, winner } = gameState;

  const current = history[stepNumber];
  const board = Board({
    squares: current.squares,
    checkSqure: (i: number) => { setGameStae(squareClick(i, gameState)); }
  });
  const gameInfo = GameInfo({
    history: history,
    xIsNext: xIsNext,
    winner: winner,
    click: (i: number) => { setGameStae(stepClick(i, gameState)); }
  });
  return (
    <div className="game">
      <div className="game-board">
        {board}
      </div>
      {gameInfo}
    </div>
  );
};

export default Game;

function squareClick(i: number, state: GameState): GameState {

  if (state.winner) {
    return { ...state };
  } else {

    const nextStepNumber = state.stepNumber + 1;
    const xIsNextNext = isXNext(nextStepNumber);
    const history = state.history.slice(0, nextStepNumber);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[i] = state.xIsNext ? "X" : "O";
    const winner = calculateWinner(squares);

    return {
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: nextStepNumber,
      xIsNext: isXNext(nextStepNumber),
      winner: winner
    };
  }
}

function stepClick(i: number, state: GameState): GameState {
  return {
    ...state, ...{
      stepNumber: i,
      xIsNext: isXNext(i),
      winner: calculateWinner(state.history[i].squares)
    }
  };
}

function calculateWinner(squares: Array<string>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
