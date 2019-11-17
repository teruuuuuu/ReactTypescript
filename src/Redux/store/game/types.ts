export class History {
  squares: Array<string>;

  constructor(squares: Array<string>) {
    this.squares = squares;
  }
}

export interface GameState {
  history: Array<History>,
  stepNumber: number,
  xIsNext: boolean,
  winner: string
}

export type StateType = {
  appState: GameState
}
