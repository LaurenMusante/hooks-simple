import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({resource}) => {
	const [resources, setResources] = useState([]);
	//initializes our state to be an empty array and gives us access to that initial state with 'resources' and we can change it using 'set
	const fetchResource = async (resource) => {
		//note: "resource" is the prop: will be either 'posts' or 'todos'
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`
		);

		setResources(response.data);
		// use to be: this.setState({ resources: response.data});
	}
//this will run every time our component mounts or updates
	useEffect(() => {
		fetchResource(resource); //resource is the prop
	}, [resource])
	//[resource] is the second argument that we are passing into useEffect. When it changes, useEffect is called. If I click on "posts" over and over again, it doesn't change the [resource] so it won't call useEffect/make another API call again. SO this replaces the "if prevProps !== props, then make API call".

		return (
			<div>
				{/* only works w/in a class component: {this.props.resource} becomes... */}
				{resources.length}
		
			</div>
		)
	
}

export default ResourceList;