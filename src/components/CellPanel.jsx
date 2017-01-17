import React from 'react';
//var CellPanel = (props) => <div>[CellPanel]</div>;
import Cell from './Cell';
var CellRow = (props) => <div>
    { props.cells.map(cell => <Cell {...cell} />) }
</div>;
class CellPanel extends React.Component {
    render() {
        const props = this.props;
        console.log('CellPanel.render: props=', props);
        /*
        return <div className="cellPanel">
            {props.cells.map(cellRow => {
                cellRow.map(cell => <Cell {...cell} />)
            })}
        </div>;
        */
        return <div className="cellPanel">
            { props.cells.map(row => <CellRow cells={row} />) }
        </div>;
    }
}
module.exports = CellPanel;
