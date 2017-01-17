import React from 'react';
var SplashScreen = (props) => <div>
    <h2>Splash Screen</h2>
    <button onClick={props.dismissSplashScreen}>Dismiss</button>
</div>;
module.exports = SplashScreen;
