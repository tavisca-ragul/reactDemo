import React from 'react';
import Prateek from './prateek';

const samaaja = (props) => {

	return props.content.map((item) => {
		return (
			<div key={item.name1}>
				<div>{item.name1}</div>
				<div>{item.nickname1}</div>
			</div>
		)
	})
}

export default samaaja;