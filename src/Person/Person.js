import React from 'react'
import './Person.css'
import Radium from 'radium'

const person = (props) => {

	const personStyle = {

		'@media(min-width: 500px)': {
			width: '450px'
		}
	};

	return(  
			<div className="Person" style={personStyle}>
				<p onClick={props.pclick}>I' m {props.name} and I am {props.age} years old</p> 
				<p>{props.children}</p>
				<input type="text" onChange={props.pchanged} value={props.name}/>
			</div>	
		);
}

export default Radium(person);