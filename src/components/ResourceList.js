import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
 //move everthing (all hook-related logic) from "useState() to the end of "useEffect()"" here, then return "resources" at the end of this function. Then, call function under ResourceList: const resources = useResources(resource) where "resource" is the user input. 
//  THIS ENABLES US TO REUSE THIS SAME LOGIC IN ANY COMPONENT!
}
const ResourceList = ({resource}) => {
	const [resources, setResources] = useState([]);
	//initializes our state to be an empty array and gives us access to that initial state with 'resources' 
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
	//***note that you can't make the API call directly from within useEffect. Instead, it 's put into another function (fetchResource) and added into useEffect(). This is because useEffect must return a 'cleanup function' or 'nothing'. Our API call function returns a promise, so it won't work within useEffect().

		return (
			<ul>
				{/* only works w/in a class component: {this.props.resource} becomes... */}
				{resources.map(record => <li key = {record.id}>{record.title}</li>)}
				{/* note that .map requires a key */}
		
			</ul>
		)
	
}

export default ResourceList;