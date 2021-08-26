import React, { useState, useEffect } from 'react';
import { Container, AppBar, Card, CardMedia, CardContent, Typography, makeStyles, Button, CircularProgress } from '@material-ui/core';

function App() {
	const [users, setUsers] = useState([])
	const [loader, setLoader] = useState(false);;

	const loadUsers = () => {
		setLoader(true);
		(async () => {
			const response = await fetch("https://reqres.in/api/users?page=1");
			const JSONres = await response.json();
			setUsers(JSONres.data);
			console.log(users);
			setLoader(false);
		})()
	}

	const useStyles = makeStyles ({
		image: {
			height: "300px",
			minWidth: "400px",
		},
		flex: {
			display: "grid",
			gridTemplateColumns: "auto auto auto"
		},
		padding: {
			padding: '2%',
		}
	});
	const classes = useStyles ();

	return (
		<>
			<AppBar position='static'>
				<Typography variant='h4' align='center' className={classes.padding}>XYZ company</Typography>
			</AppBar>
			
			<center className={classes.padding}>
				<Typography variant='h5'>Welcome!</Typography>
				<br />
				<Button variant='contained' color='primary' onClick={loadUsers}>Load users</Button>
				<br />
				<br />
				{
				loader === true ? <CircularProgress /> : console.log("loader false")
				}
			</center>
			<Container>
				<div className={classes.flex}>
					{
					users.map ((user) => (
						<Card key={user.id}>

							<CardMedia
								className={classes.image}
								image = {user.avatar} 
								title = {user.first_name}
							/>

							<CardContent>
								<Typography>Name: {user.first_name + " " + user.last_name}</Typography>
								<Typography>Email: {user.email}</Typography>
							</CardContent>

						</Card>
					))
					}
				</div>
			</Container>
		</>
	);
}

export default App;
