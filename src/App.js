// src/App.js
import React, { useState } from "react";
import UserForm from "./component/userForm";
import UserList from "./component/userList";

const App = () => {
	const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser] = useState({});
	const [editMode, setEditMode] = useState(false);

	const addUser = (user) => {
		setUsers([...users, user]);
	};

	const editUser = (user) => {
		setCurrentUser(user);
		setEditMode(true);
	};

	const updateUser = (updatedUser) => {
		setUsers(
			users.map((user) =>
				user.email === updatedUser.email ? updatedUser : user
			)
		);
		setEditMode(false);
	};

	const deleteUser = (email) => {
		setUsers(users.filter((user) => user.email !== email));
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">CRUD Application</h1>
			<UserForm
				addUser={addUser}
				currentUser={currentUser}
				updateUser={updateUser}
				editMode={editMode}
			/>
			<UserList users={users} editUser={editUser} deleteUser={deleteUser} />
		</div>
	);
};

export default App;
