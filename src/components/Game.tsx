import React from 'react';
import { useGameState } from './GameState';
import { Log } from './Log';
import { Board } from './Board';
import { Row, Column } from './Layout';

function Game() {

    const onChangePlayerX = (e: React.FormEvent<HTMLInputElement>) => {
        setPlayerX(e.currentTarget.value);
    }

    const onChangePlayerO = (e: React.FormEvent<HTMLInputElement>) => {
        setPlayerO(e.currentTarget.value);
    }

    const {
        gameState,
        current,
        xIsNext,
        winner,
        X, 
        O,
        handleClick,
        jumpTo,
        setPlayerX,
        setPlayerO,
    } = useGameState();

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 100,
        }}>
            <Row gap={20}>
                <Column gap={20}>
                    <h1 style={{
                        padding: 10
                    }}>Tic Tac Toe</h1>
                    <div>
                        {
                            winner
                                ? `Winner ${winner ? X : O}`
                                : `Next Player ${xIsNext ? X : O}`
                        }
                    </div>
                    <Board board={current} onClick={handleClick} />
                    <form >
                        <input type="text" placeholder='enter name of player X' name='playerX' onChange={onChangePlayerX}/>
                        <input type="text" placeholder='enter name of player O' name='playerO' onChange={onChangePlayerO}/>
                    </form>
                </Column>
                <Log history={gameState.history} jumpTo={jumpTo} />
            </Row>
        </div>
    );
}

export default Game;