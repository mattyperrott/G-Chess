import React, { useState, useEffect } from 'react';
import Chessboard from 'chessboardjsx';
import SinglePlayerAI from '../ai/SinglePlayerAI';

interface GameProps {
    mode: 'singleplayer' | 'multiplayer';
}

const Game: React.FC<GameProps> = ({ mode }) => {
    const [board, setBoard] = useState<any>(initializeBoard());
    const [currentTurn, setCurrentTurn] = useState('white');
    const [ai] = useState(mode === 'singleplayer' ? new SinglePlayerAI(board, currentTurn) : null);

    const onDrop = ({ sourceSquare, targetSquare }: any) => {
        const move = { from: sourceSquare, to: targetSquare };
        
        // Apply the move to the board
        const newBoard = { ...board };
        newBoard.move(move);
        setBoard(newBoard);

        setCurrentTurn(currentTurn === 'white' ? 'black' : 'white');

        if (mode === 'singleplayer' && ai) {
            setTimeout(() => {
                const aiMove = ai.getBestMove();
                newBoard.move(aiMove);
                setBoard(newBoard);
                setCurrentTurn(currentTurn === 'white' ? 'black' : 'white');
            }, 500);
        }
    };

    return (
        <Chessboard
            width={320}
            position={board.fen()}
            onDrop={onDrop}
            orientation={currentTurn}
        />
    );
};

export default Game;

function initializeBoard() {
    // Initialize the board to the starting position
    return new Chess();
}
