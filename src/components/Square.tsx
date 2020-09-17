import React from 'react';
import styled from 'styled-components';
import { Value } from './GameState';

const StyledSquare = styled.button`
  width: 80px;
  height: 80px;
  background: #fff;
  border: 1px solid #999;
  padding: 0;
  font-size: 45px;
  font-weight: bold;
`;
type SqaureProps = {
    value: Value;
    onClick: () => void;
};
export function Square(props: SqaureProps) {
    return (
        <StyledSquare onClick={props.onClick}>
            {props.value}
        </StyledSquare>
    );
}
