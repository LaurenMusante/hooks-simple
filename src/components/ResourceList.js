import React from 'react';
import useResources from './useResources'
//the following is a "custom hook"


const ResourceList = ({resource}) => {
	//note: "resource" is the prop: will be either 'posts' or 'todos'
	const resources = useResources(resource);
	
	
		return (
			<ul>
				{resources.map(record => <li key = {record.id}>{record.title}</li>)}
			</ul>
		)
	
}

export default ResourceList;