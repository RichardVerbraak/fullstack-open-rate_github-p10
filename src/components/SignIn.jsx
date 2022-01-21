import React from 'react';

import * as yup from 'yup';

import { Formik } from 'formik';
import SignInForm from './SignInForm';

const initialValues = {
	username: '',
	password: '',
};

const validationSchema = yup.object().shape({
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
});

// handleSubmit is a prop that comes from Formik which calls onSubmit after it's done
const SignIn = () => {
	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default SignIn;
