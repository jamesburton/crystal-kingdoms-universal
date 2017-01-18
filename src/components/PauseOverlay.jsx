import React from 'react';
var PauseOverlay = ({paused}) => !paused ? null :
<div style={{ position: 'absolute', width: '512px', height: '512px', backgroundColor: '#333', opacity: 0.5}}>
    <h2 style={{backgroundColor: 'transparent', opacity: 1, color: '#ddd', textAlign: 'center'}}><strong>Paused</strong></h2>
</div>;
module.exports = PauseOverlay;
