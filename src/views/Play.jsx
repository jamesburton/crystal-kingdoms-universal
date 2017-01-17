import React from 'react';
//var Play = () => <div><h2>Play Page</h2></div>;
import { connect } from 'react-redux';

import GameView from '../containers/GameView';
import playActions from '../actions/play';

class Play extends React.Component {
    render() {
        var props = this.props;
        return <GameView 
            dismissSplashScreen={() => props.dispatch(playActions.dismissSplashScreen())}
            startGame={() => props.dispatch(playActions.startGame())}
            quitGame={() => props.dispatch(playActions.quitGame())}
            {...props} />;
    }
}
//module.exports = Play;
module.exports = connect(state => state.play)(Play);