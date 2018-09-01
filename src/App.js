import React, { Component } from 'react';
import classes from './App.css';

import Person from './Person/Person'

class App extends Component {

  state = {
  	persons: [
  	  {id: 'a1', name: 'Shailendra', age: 40},
  	  {id: 'a2', name: 'Ettee', age: 38},
  	  {id: 'a3', name: 'Nilay', age: 6},
  	],
  	showPersons: false
  }	

  nameChangedHandler = (event, id) => {
  	const personIndex = this.state.persons.findIndex(p => {
  		return p.id === id;
  	});

  	const person = {
  		...this.state.persons[personIndex]
  	};
  	
  	person.name = event.target.value;

  	const persons = [...this.state.persons];
  	persons[personIndex] = person;


  	this.setState( {
  	persons: persons,
  	})
  }


  togglePersonsHandler = () => {

  	const doesShow = this.state.showPersons;
  	this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
  	//const persons = this.state.persons.slice();
  	//or
  	const persons = [...this.state.persons]
  	persons.splice(personIndex, 1)
  	this.setState({persons: persons})
  }

  render() {

  	let persons = null;
  	let btnClass = '';

  	if (this.state.showPersons){

  		persons = (
  			<div>
  				{this.state.persons.map((person,index) => {
  					return <Person
  					pclick={() => this.deletePersonHandler(index)} 
  					name={person.name} 
  					age={person.age}
  					key={person.id}
  					pchanged={(event) => this.nameChangedHandler(event,person.id)}/>
  				})}	
        	</div> 
  			);
  		
  		btnClass = classes.Red;

  	}

  	const stylclasses = [];
  	if (this.state.persons.length <= 2){
  		stylclasses.push(classes.red);
  	}

  	if (this.state.persons.length <= 1){
  		stylclasses.push(classes.bold);
  	}

    return (
    
      <div className={classes.App}>
        <h1> Hi, I'm a React App</h1>
        <p className={stylclasses.join(' ')}>This is really working!</p>
        <button 
        	className={btnClass}
        	onClick={this.togglePersonsHandler} >Toggle Name Card Display</button> 
        {persons}	         	
      </div>
      
    );
  }
}

export default App;
