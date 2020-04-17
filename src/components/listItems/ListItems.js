import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ListItems(props) {
	const items = props.items;
	
	const listItems = items.map(item => 
		{
			return (
				<div 
					className="list"
					key={item.key}>
					<p>
						<input 
							type="text" 
							id={item.key} 
							value={item.text} 
							onChange={ (e) => props.setUpdate(e.target.value, item.key)}/>
						<span>
							<FontAwesomeIcon 
								className="faicons" 
								icon="trash" 
								onClick={ () => props.deleteItem(item.key)}
							/>
						</span>
					</p>
				</div>
				)
		})
	return (
		<div>{listItems}</div>
	)
	
}