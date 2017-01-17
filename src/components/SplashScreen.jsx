import React from 'react';
import Dimensions from 'react-dimensions';
/*
var SplashScreen = (props) => <div>
    <h2>Splash Screen</h2>
    <button onClick={props.dismissSplashScreen}>Dismiss</button>
</div>;
*/
/*
var SplashScreen = (props) => <div style={{width: props.containerWidth, height: props.containerHeight, backgroundColor: '#aaa'}} onClick={props.dismissSplashScreen}>
    <h2>Crystal Kingdoms</h2>
    <h3>by Code-Consultants</h3>
    <h4><em>(Core Author(s): James Burton)</em></h4>
    <div>
        Size: {props.containerWidth}, {props.containerHeight}
    </div>
</div>;
*/

export class SplashScreen extends React.Component {
    render() {
        var props = this.props;
        return <div style={{width: props.containerWidth, height: props.containerHeight, backgroundColor: '#aaa'}} onClick={props.dismissSplashScreen}>
            <h2>Crystal Kingdoms</h2>
            <h3>by Code-Consultants</h3>
            <h4><em>(Core Author(s): James Burton)</em></h4>
            <div>
                Size: {props.containerWidth}, {props.containerHeight}
            </div>
        </div>;
    }
}

SplashScreen = Dimensions({elementResize: true})(SplashScreen);
module.exports = SplashScreen;
