import React from 'react';
import CursorImage from '../../images/Cursor.png';
var Cursor = (props) => {
    console.log('components/Cursor:- props=', props);
    return <div className="cursor" 
        style={{
            position: 'relative', 
            width: 0, 
            height: 0, 
            overflow: 'visible', 
            display: props.visible ? 'block' : 'none', 
            left: (props.x * 64) + 'px', 
            top: (props.y * 64) + 'px'
        }}>
            <img src={CursorImage} />
        </div>;
}
module.exports = Cursor;