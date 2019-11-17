export const CHECK_SQUARE_TYPE = "CHECK_SQUARE";
interface SquareAction {
  type: typeof CHECK_SQUARE_TYPE,
  i: number
}
export const checkSquare = (i: number) => ({ type: CHECK_SQUARE_TYPE, i: i });

export const CHECK_STEP_TYPE = "CHECK_STEP";
interface StepAction {
  type: typeof CHECK_STEP_TYPE,
  i: number
}
export const checkStep = (i: number) => ({ type: CHECK_STEP_TYPE, i: i });

export type GameActionTypes = SquareAction | StepAction;


