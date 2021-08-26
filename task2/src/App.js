import React, { useState, useEffect } from 'react';

function App() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		(async () => {
			const response = await fetch("https://reqres.in/api/users?page=1");
			const JSONres = await response.json();
			setUsers(JSONres.data);
		})()
	}, []);
	console.log(users);

	return (
		<div>
			<header>
				XYZ company
			</header>
			<main>
				<h1>Hello!</h1>
				<div>
					{
					users.map ((user) => (
						<div key={user.id}>
							<p>Name: {user.first_name + " " + user.last_name}</p>
							<p>Email: {user.email}</p>
							<img src={user.avatar} />
						</div>
					))
					}
				</div>
			</main>
			<footer>
				&copy; XYZ company 2021
			</footer>
		</div>
	);
}

export default App;
