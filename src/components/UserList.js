import React from 'react';
import useResources from './useResources'

const UserList = () => {
	const users = useResources('users'); 
	//because "users" is now the endpoint that we want; not posts/todos.
	return (
		<ul>
			{users.map(user => (
				<li key={user.id}> {user.name}</li>))}
		</ul>
	);
};

export default UserList;	