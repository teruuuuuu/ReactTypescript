import * as React from 'react';

import { History } from '../state/History';
import { calculateWinner } from '../function/index';

interface Props {
  history: Array<History>,
  stepNumber: number,
  xIsNext: boolean
}
interface State { }

export class GameInfo extends React.Component<Props, State> {
  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = this.props.history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button className="history" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.props.xIsNext ? "X" : "O");
    }

    return (
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    );
  }
}


