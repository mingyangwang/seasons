import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		//THIS IS THE ONLY TIME WE DO DIREXT ASSIGNMENT
		//TO this.state
		this.state = { lat: null };

		window.navigator.geolocation.getCurrentPosition(
			position => {
				//We called setstate!!!
				this.setState({ lat: position.coords.latitude });
			},
			err => console.log(err)
		);
	}

	//React says we have to define render!!
	render() {
		return <div>Latitude:{this.state.lat}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
