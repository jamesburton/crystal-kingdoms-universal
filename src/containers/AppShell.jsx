// Define the application shell
import React, { PropTypes } from 'react';
import Navigation from '../components/Navigation';
import Dimensions from 'react-dimensions';

const AppShell = Dimensions({resizeElement: true})(({ children, containerWidth, containerHeight }) => (
  <div style={{ width: containerWidth, height: containerHeight }}>
      <h1>Crystal Kingdoms</h1>
      <Navigation />

      { children }
	</div>
));

AppShell.propTypes = {
  children: PropTypes.element,
};

export default AppShell;

