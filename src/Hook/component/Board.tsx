import * as React from 'react';
import { Square } from './Square';

interface Props {
  squares: Array<string>;
  checkSqure: (i: number) => void;
}

export const Board = (props: Props) => {
  const { squares, checkSqure } = props;
  return (
    <div>
      <div className="board-row">
        {Square({ value: squares[0], click: () => { checkSqure(0); } })}
        {Square({ value: squares[1], click: () => { checkSqure(1); } })}
        {Square({ value: squares[2], click: () => { checkSqure(2); } })}
      </div>
      <div className="board-row">
        {Square({ value: squares[3], click: () => { checkSqure(3); } })}
        {Square({ value: squares[4], click: () => { checkSqure(4); } })}
        {Square({ value: squares[5], click: () => { checkSqure(5); } })}
      </div>
      <div className="board-row">
        {Square({ value: squares[6], click: () => { checkSqure(6); } })}
        {Square({ value: squares[7], click: () => { checkSqure(7); } })}
        {Square({ value: squares[8], click: () => { checkSqure(8); } })}
      </div>
    </div>
  );
};
