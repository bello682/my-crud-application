// src/components/UserList.js
import React from "react";

const UserList = ({ users, editUser, deleteUser }) => {
	return (
		<div className="p-4 bg-white rounded-lg shadow-md">
			<h2 className="text-lg font-bold mb-4">User List</h2>
			{users.length === 0 ? (
				<p className="text-gray-500">No users available.</p>
			) : (
				<ul>
					{users.map((user, index) => (
						<li
							key={index}
							className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded-md"
						>
							<div>
								<span className="font-bold">{user.name}</span> - {user.email}
							</div>
							<div>
								<button
									onClick={() => editUser(user)}
									className="bg-yellow-400 text-white py-1 px-2 rounded-md hover:bg-yellow-500 mr-2"
								>
									Edit
								</button>
								<button
									onClick={() => deleteUser(user.email)}
									className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600"
								>
									Delete
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default UserList;
