import React from 'react';

import CellPanel from './CellPanel';
import ScorePanel from './ScorePanel';

//import styles from '../scss/styles.scss';
const styles = {
    cellPanel: { width: '512px', height: '512px', backgroundColor: '#88a', float: 'left' },
    //cellPanel: { width: '512px', height: '512px', backgroundColor: '#88a', float: 'left', position: 'absolute', top: 0, left: 0 },
    scoresPanel: { width: 'auto', height: '512px', backgroundColor: '#a88', float: 'left' },
    //scoresPanel: { left: '520px', right: '8px', top: 0, height: '512px', backgroundColor: '#a88', float: 'left' },
    controlsPanel: { width: '100%', height: 'auto', backgroundColor: '#8a8', float: 'none', clear: 'both' },
    cell: { width: '64px', height: '64px', backgroundColor: '#666', float: 'left' }
};

var GameScreen = (props) => <div>
    <h2>Game Screen</h2>

    <div>
        <div style={styles.cellPanel}>
            <CellPanel {...props} />
        </div>
        <div style={styles.scoresPanel}>
            <ScorePanel {...props} />
        </div>
    </div>

    <div style={styles.controlsPanel}>
        <button onClick={props.quitGame}>Quit Game</button> 
        <button onClick={props.resetGame}>Reset Game</button>
        <button onClick={props.showCursor}>Show Cursor</button>
        <button onClick={props.hideCursor}>Hide Cursor</button>
        <button onClick={props.moveCursor}>Move Cursor</button>
    </div>
</div>;
module.exports = GameScreen;
