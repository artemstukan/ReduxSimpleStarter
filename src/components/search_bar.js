import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props); // ask Simon-Alexy about super

		this.state = { term: '' };
	}

	render() {
		return (
			<div>
				<input 
					value = {this.state.term}
					onChange={event => this.setState({ term: event.target.value })} />
			</div>
		)
	}

	// onInputChange(event) { //Why it has event argument here but not in onInputChange?
	// 	console.log("changed!");
	// 	console.log(event); //Why target field is null in Chrome Console?
	// 	console.log(event.target); //Why here it is an HTML element?
	// 	console.log(event.target.value); //Why is it suddently a real value we typed in???
	// }

	onInputClick(event) {
		console.log("clicked!");
		console.log(event);
	}
}

export default SearchBar;