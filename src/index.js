import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyATQwkMI-DSD1ROaxCPampE8tvPSILsu1k';

// Create new component. This component should produce some HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container')); // Why do we do it like this?

/* And not like this? 15! out of 149
var myApp = new App();
ReactDOM.render(myApp, document.querySelector('.container'));
*/