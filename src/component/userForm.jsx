import React, { useState, useEffect } from "react";

const UserForm = ({ addUser, currentUser, updateUser, editMode }) => {
	const [user, setUser] = useState({ name: "", email: "" });

	useEffect(() => {
		if (editMode) {
			setUser(currentUser);
		} else {
			setUser({ name: "", email: "" });
		}
	}, [currentUser, editMode]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (editMode) {
			updateUser(user);
		} else {
			addUser(user);
		}
		setUser({ name: "", email: "" });
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="p-4 bg-gray-100 rounded-lg shadow-md"
		>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">
					Name
				</label>
				<input
					type="text"
					value={user.name}
					onChange={(e) => setUser({ ...user, name: e.target.value })}
					className="w-full p-2 border border-gray-300 rounded-md"
					required
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">
					Email
				</label>
				<input
					type="email"
					value={user.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					className="w-full p-2 border border-gray-300 rounded-md"
					required
				/>
			</div>
			<button
				type="submit"
				className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
			>
				{editMode ? "Update User" : "Add User"}
			</button>
		</form>
	);
};

export default UserForm;
