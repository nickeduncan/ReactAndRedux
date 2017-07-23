import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY="AIzaSyAOn32a__11gFOcuRpBdF81tBoGB8SuYCc"

// Create a new component. This component should produce
// some HTML
const App = () => {
	return <div>Hi!</div>;
}

// Take this component's generated HTML an dput it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
