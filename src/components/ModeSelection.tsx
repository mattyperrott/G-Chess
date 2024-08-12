import React from 'react';

interface ModeSelectionProps {
    onSelectMode: (mode: 'singleplayer' | 'multiplayer') => void;
}

const ModeSelection: React.FC<ModeSelectionProps> = ({ onSelectMode }) => {
    return (
        <div>
            <button onClick={() => onSelectMode('singleplayer')}>Single Player</button>
            <button onClick={() => onSelectMode('multiplayer')}>Multiplayer</button>
        </div>
    );
};

export default ModeSelection;
