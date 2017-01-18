import React from 'react';
//var CellPanel = (props) => <div>[CellPanel]</div>;
import Cell from './Cell';
import Cursor from './Cursor';
var CellRow = (props) => <div style={{width: '64px', float: 'left'}}>
    { props.cells.map((cell, index) => <Cell key={index} {...cell} />) }
</div>;
class CellPanel extends React.Component {
    render() {
        const props = this.props;
        //console.log('CellPanel.render: props=', props);
        /*
        return <div className="cellPanel">
            {props.cells.map(cellRow => {
                cellRow.map(cell => <Cell {...cell} />)
            })}
        </div>;
        */
        return <div className="cellPanel">
            { props.cells.map((row,index) => <CellRow key={index} cells={row} />) }
            <div style={{width: 0, height: 0, overflow: 'visible', position: 'absolute'}}>
                <Cursor visible={props.cursorVisible} x={props.cursorX} y={props.cursorY} />
            </div>
        </div>;
    }
}
module.exports = CellPanel;
