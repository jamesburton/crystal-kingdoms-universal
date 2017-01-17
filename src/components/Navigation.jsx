import React from 'react';
import { Link } from 'react-router';
import Spacer from './Spacer';
var Navigation = (props) => <div>
    <Link to="/">Home</Link>
    <Spacer />
    <Link to="/play" >Play</Link>
</div>;
module.exports = Navigation;
