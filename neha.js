import React from 'react';
import Samaaja from './samaaja';

class neha extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: 'Mohit Ghai',
			nickname: 'chutiya',
			Sreea: [
				{name1: 'Shreea',nickname1: 'Aunty Challi'},
				{name1: 'Shreea1',nickname1: 'Aunty1 Challi1'}	
			]
		};
	}

	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
				<h2>{this.state.nickname}</h2>
				<Samaaja content={this.state.Sreea}/>
			</div>
		);
	}
}

export default neha;