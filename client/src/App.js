import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: []
		};
	}

	componentWillMount() {
		fetch('http://localhost:3000/api/notes')
			.then((response) => response.text())
			.then(JSON.parse)
			.then((notes) => this.setState({ notes }));
	}

	render() {
    const { notes } = this.state;
		return (
			<div className="App">
				<p>Hello React and Loopback!</p>
			</div>
		);
	}
}

export default App
