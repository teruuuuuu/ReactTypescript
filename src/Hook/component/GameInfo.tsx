import * as React from 'react';

import { History } from '../state/types';

interface Props {
  history: Array<History>,
  xIsNext: boolean,
  winner: string,
  click: (i: number) => void
}

const moveTag = (click: (i: number) => void, move: number) => {
  const desc = move ? 'Go to move #' + move : 'Go to game start';
  return (
    <li key={move}>
      <button className="history" onClick={() => click(move)}>{desc}</button>
    </li>
  );
};

export const GameInfo = (props: Props) => {
  const { history, xIsNext, winner, click } = props;

  const status = (() => {
    if (winner) {
      return "Winner: " + winner;
    } else {
      return "Next player: " + (xIsNext ? "X" : "O");
    }
  })();
  const moves = history.map((step, move) => {
    return moveTag(click, move);
  });

  return (
    <div className="game-info">
      <div>{status}</div>
      <ol>{moves}</ol>
    </div>
  );
};
