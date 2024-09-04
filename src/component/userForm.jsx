// src/components/UserForm.js

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { notification } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const UserForm = ({ addUser, currentUser, updateUser, editMode }) => {
	// Define the validation schema using Yup
	const validationSchema = Yup.object({
		name: Yup.string()
			.required("Name is required")
			.min(2, "Name must be at least 2 characters"),
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
	});

	// Handle form submission
	const handleSubmit = (values, { resetForm }) => {
		try {
			if (editMode) {
				updateUser(values);
				notification.success({
					message: "Success",
					description: "User updated successfully!",
					icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
				});
			} else {
				addUser(values);
				// notification.success({
				// 	message: "Success",
				// 	description: "User added successfully!",
				// 	icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
				// });
			}
			resetForm();
		} catch (error) {
			notification.error({
				message: "Error",
				description: "An error occurred while submitting the form.",
				icon: <CloseCircleOutlined style={{ color: "#ff4d4f" }} />,
			});
		}
	};

	// Initial form values
	const initialValues = editMode ? currentUser : { name: "", email: "" };

	return (
		<Formik
			initialValues={initialValues}
			enableReinitialize
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ errors, touched, isSubmitting }) => (
				<Form className="p-4 bg-gray-100 rounded-lg shadow-md">
					{/* Name Field */}
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="name"
						>
							Name
						</label>
						<div className="relative">
							<Field
								name="name"
								type="text"
								className={`w-full p-2 border rounded-md focus:outline-none ${
									touched.name
										? errors.name
											? "border-red-500"
											: "border-green-500"
										: "border-gray-300"
								}`}
								placeholder="Enter your name"
							/>
							{touched.name && errors.name ? (
								<CloseCircleOutlined className="absolute right-2 top-2 text-red-500" />
							) : touched.name && !errors.name ? (
								<CheckCircleOutlined className="absolute right-2 top-2 text-green-500" />
							) : null}
						</div>
						<ErrorMessage
							name="name"
							component="div"
							className="text-red-500 text-sm mt-1"
						/>
					</div>

					{/* Email Field */}
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<div className="relative">
							<Field
								name="email"
								type="email"
								className={`w-full p-2 border rounded-md focus:outline-none ${
									touched.email
										? errors.email
											? "border-red-500"
											: "border-green-500"
										: "border-gray-300"
								}`}
								placeholder="Enter your email"
							/>
							{touched.email && errors.email ? (
								<CloseCircleOutlined className="absolute right-2 top-2 text-red-500" />
							) : touched.email && !errors.email ? (
								<CheckCircleOutlined className="absolute right-2 top-2 text-green-500" />
							) : null}
						</div>
						<ErrorMessage
							name="email"
							component="div"
							className="text-red-500 text-sm mt-1"
						/>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 ${
							isSubmitting ? "opacity-50 cursor-not-allowed" : ""
						}`}
						disabled={isSubmitting}
					>
						{editMode ? "Update User" : "Add User"}
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default UserForm;
