import React from 'react';

import { Formik } from 'formik';
import SignInForm from './SignInForm';

const initialValues = {
	username: '',
	password: '',
};

// handleSubmit is a prop that comes from Formik which calls onSubmit after it's done
const SignIn = () => {
	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default SignIn;
