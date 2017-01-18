import React from 'react';
//var ScorePanel = (props) => <div>[ScorePanel]</div>;
var ScorePanelItem = (props) => {
    return <li style={{float: 'none', clear: 'both', height: '1.2rem'}}>
        <span style={{float: 'left'}}>{props.name}</span>
        <span style={{float: 'right'}}>{props.score}</span>
    </li>;
};

var ScorePanel = (props) => {
    return <div>
        <h3>Scores</h3>

        <ul style={{listStyle: 'none', paddingLeft: 0}}>
            { props.players.map((player, index) => <ScorePanelItem name={player.name} key={index} index={index} color={player.color} score={player.score} id={player.id} /> )}
        </ul>
    </div>;
};
module.exports = ScorePanel;