import React from 'react';
var GameScreen = (props) => <div>
    <h2>Game Screen</h2>
    <button onClick={props.quitGame}>Quit Game</button>
</div>;
module.exports = GameScreen;
