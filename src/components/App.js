import React, { useState } from 'react';
import ResourceList from './ResourceList'
import UserList from './UserList'

const App = () => {
	const [resource, setResource] = useState('posts');
	return(
		<div>
			<div>
				<UserList />
				<button onClick={() => setResource('posts')}>Posts</button>
				<button onClick={() => setResource('todos')}>Todos</button>
			</div>
			<ResourceList resource={resource} />
		</div>
	)
}


//WITHOUT HOOKS
// class App extends React.Component {
// 	state = { resource: 'posts'};
// 	//we add state to determine which button has been clicked, along with bottm "{this.state.resource}"
// 	render(){
// 		return (
// 		<div>
// 			<div>
// 				<button onClick={()=> this.setState({resource: 'posts'})}>Posts</button>
// 					<button onClick={() => this.setState({ resource: 'todos' })}>Todos</button>
// 			</div>
// 			{this.state.resource}
// 		</div>
// 		)
// 	}
// }

export default App;