import React from 'react';

import CrystalBlue from '../../images/CrystalBlue.png';
import CrystalRed from '../../images/CrystalRed.png';
import CrystalGreen from '../../images/CrystalGreen.png';
import CrystalPurple from '../../images/CrystalPurple.png';
import CrystalYellow from '../../images/CrystalYellow.png';
import CrystalGrey from '../../images/CrystalGrey.png';
import CrystalEmpty from '../../images/CrystalEmpty.png';
import Castle from '../../images/Castle.png';

import PlayerColor from '../constants/PlayerColors';

var styles = {
    cell: { width: '64px', height: '64px', float: 'left' },
    //noDisplace: { width: 0, height: 0, overflow: 'visible' }
    //noDisplace: { width: '64px', height: '64px', marginRight: '-64px', marginBottom: '-64px' }
    noDisplace: { position: 'absolute' }
};
var Cell = (props) => {
    var owner = props.owner;
    var ownerCrystal = CrystalEmpty;
    if(owner !== null) {
        switch(owner.color) {
            case PlayerColor.NONE:
                // NB: also handles ... case PlayerColor.EMPTY:
                // No change
                break;
            case PlayerColor.BLUE:
                //console.debug('Display a BLUE crystal: ' + props.x + ',' + props.y);
                ownerCrystal = CrystalBlue;
                break;
            case PlayerColor.RED:
                //console.debug('Display a RED crystal: ' + props.x + ',' + props.y);
                ownerCrystal = CrystalRed;
                break;
            case PlayerColor.GREEN:
                //console.debug('Display a GREEN crystal: ' + props.x + ',' + props.y);
                ownerCrystal = CrystalGreen;
                break;
            case PlayerColor.PURPLE:
                //console.debug('Display a PURPLE crystal: ' + props.x + ',' + props.y);
                ownerCrystal = CrystalPurple;
                break;
            case PlayerColor.YELLOW:
                //console.debug('Display a YELLOW crystal: ' + props.x + ',' + props.y);
                ownerCrystal = CrystalYellow;
                break;
            case PlayerColor.GREY:
                //console.debug('Display a GREY crystal: ' + props.x + ',' + props.y);
                ownerCrystal = CrystalGrey;
                break;
            default:
                throw 'Unhandled cell owner color: ' + owner.color;
        }
    }
    return <div className="cell" style={styles.cell}>
        <img style={styles.noDisplace} src={Castle} />
        <img style={styles.noDisplace} src={ownerCrystal} />
        <div style={styles.noDisplace}>{props.x}, {props.y}</div>
        <div><strong>Owner:</strong> {owner ? owner.name : 'NONE'}</div>
    </div>;
}
module.exports = Cell;