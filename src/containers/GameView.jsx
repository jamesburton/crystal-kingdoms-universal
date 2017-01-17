import React from 'react';

import SplashScreen from '../components/SplashScreen';
import MainMenu from '../components/MainMenu';
import GameScreen from '../components/GameScreen';

const GameView = (props) => { 
    var CurrentView = 
        props.showSplashScreen ? SplashScreen :
        props.gameStarted ? GameScreen :
        MainMenu;
    return <CurrentView {...props} />;
};
module.exports = GameView;
