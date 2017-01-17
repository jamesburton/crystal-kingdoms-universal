// Define the application shell
import React, { PropTypes } from 'react';
import Navigation from '../components/Navigation';

const AppShell = ({ children }) => (
	<div>
      <h1>Crystal Kingdoms</h1>
      <Navigation />

      { children }
	</div>
);

AppShell.propTypes = {
  children: PropTypes.element,
};

export default AppShell;

