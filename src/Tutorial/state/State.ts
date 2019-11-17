import { History } from './History';

export interface AppState {
  history: Array<History>,
  stepNumber: number,
  xIsNext: boolean
}
