import React from 'react';
//var Play = () => <div><h2>Play Page</h2></div>;
import { connect } from 'react-redux';

import GameView from '../containers/GameView';
import playActions from '../actions/play';
import Directions from '../constants/Directions';

class Play extends React.Component {
    componentWillReceiveUpdate() {
        console.log('views/Play.jsx, componentWillReceiveUpdate');
    }
    render() {
        var props = this.props;
        console.log('views/Play.jsx, render:- props=', props);
        return <GameView 
            dismissSplashScreen={() => props.dispatch(playActions.dismissSplashScreen())}
            startGame={() => props.dispatch(playActions.startGame())}
            quitGame={() => props.dispatch(playActions.quitGame())}
            hideCursor={() => props.dispatch(playActions.hideCursor())}
            moveCursor={() => props.dispatch(playActions.moveCursor())}
            showCursor={() => props.dispatch(playActions.showCursor())}

            newPlayer={() => props.dispatch(playActions.showNewPlayer())}
            cancelNewPlayer={() => props.dispatch(playActions.hideNewPlayer())}
            addNewPlayer={() => props.dispatch(playActions.addNewPlayer())}
            setEditPlayerName={name => props.dispatch(playActions.setEditPlayerName(name))}
            setEditPlayerColor={color => props.dispatch(playActions.setEditPlayerColor(color))}

            attackLeft={() => props.dispatch(playActions.attack(props.players[0], Directions.LEFT))}
            attackRight={() => props.dispatch(playActions.attack(props.players[0], Directions.RIGHT))}
            attackUp={() => props.dispatch(playActions.attack(props.players[0], Directions.UP))}
            attackDown={() => props.dispatch(playActions.attack(props.players[0], Directions.DOWN))}
            attackFire={() => props.dispatch(playActions.attack(props.players[0], Directions.FIRE))}

            clearScore={() => props.dispatch(playActions.clearScores())}

            {...props} />;
    }
}
//module.exports = Play;
module.exports = connect(state => state.play)(Play);