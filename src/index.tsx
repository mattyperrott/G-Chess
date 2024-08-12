import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import ModeSelection from './components/ModeSelection';
import './styles/main.css';

const App: React.FC = () => {
    const [mode, setMode] = useState<'singleplayer' | 'multiplayer' | null>(null);

    const handleModeSelection = (selectedMode: 'singleplayer' | 'multiplayer') => {
        setMode(selectedMode);
    };

    return (
        <div>
            {!mode && <ModeSelection onSelectMode={handleModeSelection} />}
            {mode && <Game mode={mode} />}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
