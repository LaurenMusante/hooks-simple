import React from 'react';
import axios from 'axios';

class ResourceList extends React.Component {
	state = { resources: []};
	async componentDidMount() {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
		this.setState({ resources: response.data})
	}
	// "data" is axios-specific. In our response object, axios nests all our data in the "data" property. 

	//componentDidMount because we want to make the call as soon as our component loads. The URL is from the documentation on website. Using string interpolation to tack on the endpoint we want, based on user input. 

	//async is added to componentDidMount because we have to "await" the response. 
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