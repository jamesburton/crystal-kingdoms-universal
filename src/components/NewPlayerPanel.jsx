import React from 'react';
//import PlayerColors from '../constants/PlayerColors';
import { availablePlayerColors } from '../constants/PlayerColors';
//var NewPlayerPanel = (props) => {
class NewPlayerPanel extends React.Component {
    render() {
        const props = this.props;
        //return <div>[NewPlayerPanel]</div>;
        return <div style={{border: '1px solid #444', padding: '3px'}}>
            <h3>New Player</h3>
            <div>
                <label>Name</label>
                <input onBlur={(e) => props.setEditPlayerName(e.target.value)} placeholder="Enter a player name" />
            </div>
            <div>
                <label>Color</label>
                <select onChange={(e) => props.setEditPlayerColor(e.target.value)} defaultValue={props.editPlayerColor}>
                    { availablePlayerColors(props.players, props.editPlayerColor)
                        .map(color => 
                            <option key={color}>{color}</option>
                        ) 
                    }
                </select>
            </div>
            <div>
                <button onClick={props.cancelNewPlayer}>Cancel</button>
                <button onClick={props.addNewPlayer}>OK</button>
            </div>
        </div>
    };
}
module.exports = NewPlayerPanel;
