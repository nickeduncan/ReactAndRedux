import React from 'react';
import ReactDOM form 'react-dom';

// Create a new component. This component should produce
// some HTML
const App = function() {
	return <div>Hi!</div>;
}

// Take this component's generated HTML an dput it
// on the page (in the DOM)
React.render(<App />);
