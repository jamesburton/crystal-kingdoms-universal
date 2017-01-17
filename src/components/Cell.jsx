import React from 'react';
var Cell = (props) => <div className="cell" style={{width:'64px', height: '64px', float: 'left'}}>
    {props.x}, {props.y}
</div>;
module.exports = Cell;