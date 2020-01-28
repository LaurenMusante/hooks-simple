import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
	state = { resources: []};
	async componentDidMount() {
		//async is added to componentDidMount because we have to "await" the response. 
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
		this.setState({ resources: response.data})
		// "data" is axios-specific. In our response object, axios nests all our data in the "data" property. 
	}

	//we use prevProps to see if the currently selected resource has changed. ONLY if it changed, we want to make another request. 
	async componentDidUpdate(prevProps) {
		if (prevProps.resource !== this.props.resource){
		const response = await axios.get(
  	`https://jsonplaceholder.typicode.com/${this.props.resource}`
		);
		this.setState({ resources: response.data });
		}
	}

	//componentDidMount because we want to make the call as soon as our component loads. The URL is from the documentation on website. Using string interpolation to tack on the endpoint we want, based on user input. This method ONLY gets invoked a single time, so it only makes a single API call. 
	//so we use componentDidUpdate - gets called every time our component rerenders. 

	render() {
		return (
			<div>
				{this.props.resource}
				{/* this is what we will use to make a call to API */}
			</div>
		)
	}
}

export default ResourceList;