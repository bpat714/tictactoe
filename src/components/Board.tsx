import React from 'react';
import { BoardState } from './GameState';
import { Square } from './Square';
import { Column, Row } from "./Layout";

type BoardProps = {
    board: BoardState;
    onClick: (square: number) => void;
};

export function Board({ board, onClick }: BoardProps) {
    return (
        <Column gap={0}>
            <Row gap={0}>
                <Square value={board[0]} onClick={() => onClick(0)} />
                <Square value={board[1]} onClick={() => onClick(1)} />
                <Square value={board[2]} onClick={() => onClick(2)} />
            </Row>
            <Row gap={0}>
                <Square value={board[3]} onClick={() => onClick(3)} />
                <Square value={board[4]} onClick={() => onClick(4)} />
                <Square value={board[5]} onClick={() => onClick(5)} />
            </Row>
            <Row gap={0}>
                <Square value={board[6]} onClick={() => onClick(6)} />
                <Square value={board[7]} onClick={() => onClick(7)} />
                <Square value={board[8]} onClick={() => onClick(8)} />
            </Row>
        </Column>
    );
}
