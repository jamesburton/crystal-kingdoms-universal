import React from 'react';
// Define any application specific (inc. behavioural) containers
// for example, a container for pages or elements that inject data
// and behavour into the visual aspects you define in a component.

var Home = (props) => <div>
    <h2>Home</h2>
    <div className="jumbotron">
        <div className="lead">Welcome to Crystal Kingdoms</div>
    </div>
</div>;
module.exports = Home;