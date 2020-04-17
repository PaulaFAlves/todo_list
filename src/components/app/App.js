import React, { Component } from 'react';
import './styles.css';

export default class App extends Component {
	render() {
		return(
			<div className="main">
				<header>Things todo</header>
				<form className="toDoForm">
					<input type="text" placeholder="Write in here!" />
					<button type="submit">Add</button>
				</form>
			</div>
		)
	}
}


