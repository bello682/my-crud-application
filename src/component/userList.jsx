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
							<div className="flex gap-4 md:gap-8">
								<button
									onClick={() => editUser(user)}
									className="bg-yellow-400 text-white font-light py-1 px-3 rounded-md hover:bg-yellow-500 
                   mr-2 md:font-bold md:py-3 md:px-5 md:bg-yellow-300"
								>
									Edit
								</button>
								<button
									onClick={() => deleteUser(user.email)}
									className="bg-red-500 text-white font-light py-1 px-3 rounded-md hover:bg-red-600 
                   md:font-bold md:py-3 md:px-5 md:bg-red-400"
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
