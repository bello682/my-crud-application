import React, { useState } from "react";
import { notification } from "antd";
// import "antd/dist/antd.css";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import UserForm from "./component/userForm";
import UserList from "./component/userList";

const App = () => {
	const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser] = useState({});
	const [editMode, setEditMode] = useState(false);

	const addUser = (user) => {
		// Optional: Ensure unique email
		const emailExists = users.some((u) => u.email === user.email);
		if (emailExists) {
			notification.error({
				message: "Error",
				description: "A user with this email already exists.",
				icon: <CloseCircleOutlined style={{ color: "#ff4d4f" }} />,
			});
			return;
		}
		setUsers([...users, user]);
		notification.success({
			message: "Success",
			description: "User added successfully!",
			icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
		});
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
		notification.success({
			message: "Success",
			description: "User updated successfully!",
			icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
		});
	};

	const deleteUser = (email) => {
		setUsers(users.filter((user) => user.email !== email));
		notification.success({
			message: "Success",
			description: "User deleted successfully!",
			icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
		});
	};

	return (
		<div className="container mx-[auto] p-4 md:p-[5rem] ">
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
