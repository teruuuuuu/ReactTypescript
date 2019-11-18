import * as React from 'react';

import { Board } from './Board';
import { GameInfo } from './GameInfo';
import { GameState } from '../store/game/types';
import { checkSquare, checkStep } from '../store/game/actions';

interface Props {
  game: GameState;
  checkSquare: typeof checkSquare;
  checkStep: typeof checkStep;
}

const Game = (props: Props) => {
  const { history, stepNumber, xIsNext, winner } = props.game;
  const current = history[stepNumber];
  const board = Board({ squares: current.squares, checkSqure: props.checkSquare });
  const gameInfo = GameInfo({
    history: history,
    xIsNext: xIsNext,
    winner: winner,
    click: (i: number) => { props.checkStep(i); }
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
