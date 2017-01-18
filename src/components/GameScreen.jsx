import React from 'react';

import CellPanel from './CellPanel';
import ScorePanel from './ScorePanel';
import NewPlayerPanel from './NewPlayerPanel';

//import styles from '../scss/styles.scss';
const styles = {
    cellPanel: { width: '512px', height: '512px', backgroundColor: '#88a', float: 'left' },
    //cellPanel: { width: '512px', height: '512px', backgroundColor: '#88a', float: 'left', position: 'absolute', top: 0, left: 0 },
    scoresPanel: { width: 'auto', height: '512px', backgroundColor: '#a88', float: 'left' },
    //scoresPanel: { left: '520px', right: '8px', top: 0, height: '512px', backgroundColor: '#a88', float: 'left' },
    controlsPanel: { width: '100%', height: 'auto', backgroundColor: '#8a8', float: 'none', clear: 'both' },
    cell: { width: '64px', height: '64px', backgroundColor: '#666', float: 'left' }
};

class GameScreen extends React.Component {
    componentWillMount() {
        this.lastTick = null;
        if(!this.props.paused) {
            this.timerHandle = window.setInterval(() => this.tick(), 2500);
        }
    }
    tick() {
        if(!this.props.paused) {
            console.log('GameScreen.tick ... actual functions have yet to be written');
            this.lastTick = new Date();
        }
    }
    render() {
        var props = this.props;
        return <div>
            <h2>Game Screen</h2>

            <div>
                <div style={styles.cellPanel}>
                    <CellPanel {...props} />
                </div>
                <div style={styles.scoresPanel}>
                    { /*
                    <ScorePanel {...props} />
                    */ }
                    <ScorePanel players={props.players} />

                    { props.showingNewOrEditPlayer && <NewPlayerPanel {...props} /> }
                </div>
            </div>

            <div style={styles.controlsPanel}>
                <button onClick={props.quitGame}>Quit Game</button> 
                <button onClick={props.resetGame}>Reset Game</button>
                <button onClick={props.showCursor}>Show Cursor</button>
                <button onClick={props.hideCursor}>Hide Cursor</button>
                <button onClick={props.moveCursor}>Move Cursor</button>

                <button onClick={props.newPlayer}>New Player</button>

                <button onClick={props.attackLeft}>Left</button>
                <button onClick={props.attackRight}>Right</button>
                <button onClick={props.attackUp}>Up</button>
                <button onClick={props.attackDown}>Down</button>
                <button onClick={props.attackFire}>Fire</button>

                <button onClick={props.clearScores}>Clear Scores</button>

                { props.paused
                    ? <button onClick={props.unpause}>Unpause</button>
                    : <button onClick={props.pause}>Pause</button> }
            </div>
        </div>;
    }
}
module.exports = GameScreen;
