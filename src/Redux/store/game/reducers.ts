import { GameState } from './types';
import { History } from './types';
import { GameActionTypes, CHECK_SQUARE_TYPE, CHECK_STEP_TYPE } from './actions';


const initval = nextState([new History(Array(9).fill(null))], 0);

export function gameReducer(
  state = initval,
  action: GameActionTypes
): GameState {
  switch (action.type) {
    case CHECK_SQUARE_TYPE:
      return squareClick(action.i, state);
    case CHECK_STEP_TYPE:
      return stepClick(action.i, state);
    default:
      return state;
  }

};

function squareClick(i: number, state: GameState): GameState {
  if (state.winner) {
    return { ...state };
  } else {

    const nextStepNumber = state.stepNumber + 1;
    const history = state.history.slice(0, nextStepNumber);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[i] = state.xIsNext ? "X" : "O";
    return nextState(history.concat([{ squares: squares }]), nextStepNumber);
  }
}

function stepClick(i: number, state: GameState): GameState {
  return nextState(state.history, i);
}

function isXNext(i: number) { return i % 2 == 1; }

function nextState(history: Array<History>, stepNumber: number): GameState {
  return {
    history: history,
    stepNumber: stepNumber,
    xIsNext: isXNext(stepNumber),
    winner: calculateWinner(history[stepNumber].squares)
  };
}

function calculateWinner(squares: Array<string>): string {
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
