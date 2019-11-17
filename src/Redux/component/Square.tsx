
import * as React from 'react';

interface Props {
  value: string,
  click: () => void
};

export const Square = (props: Props) => (
  <button className="square" onClick={(event: any) => { props.click(); }}>
    {props.value}
  </button>
);

