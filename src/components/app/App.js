import React, { Component } from 'react';
import './styles.css';

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state={
			item:[],
			currentItem: {
				text: '',
				key: ''
			}
		}
		this.handleInput = this.handleInput.bind(this);
		this.addItem = this.addItem.bind(this);
	}
	handleInput(e) {
		this.setState({
			currentItem:{
				text: e.target.value,
				key: Date.now()
			}
		})
	}

	addItem(e) {
		e.preventDefault();
		const newItem = this.state.currentItem;
		console.log(newItem);
		if (newItem.text !== '') {
			const newItems = [...this.state.item, newItem];
			this.setState({
				items: newItems,
				currentItem: {
					text: '',
					key: ''
				}
			});
		}
	}
	
	render() {
		return(
			<div className="main">
				<header>Things todo</header>
				<form 
					className="toDoForm"
					onSubmit={this.addItem}
				>
					<input 
						type="text" 
						placeholder="Write in here!" 
						value={this.state.currentItem.text}
						onChange={this.handleInput}
					/>
					<button type="submit">Add</button>
				</form>
			</div>
		)
	}
}


