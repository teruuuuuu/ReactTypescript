import * as React from 'react';

import { AppState } from '../state/State';
import { History } from '../state/History';
import { Board } from './Board';
import { GameInfo } from './GameInfo';
import { calculateWinner } from '../function/index';

interface Props { }


export default class Game extends React.Component<Props, AppState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      history: [
        new History(Array(9).fill(null))
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];


    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </div>
        <GameInfo history={this.state.history} stepNumber={this.state.stepNumber}
          xIsNext={this.state.xIsNext} />
      </div>
    );
  }
}
