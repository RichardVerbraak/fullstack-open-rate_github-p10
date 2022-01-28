import React, { useContext } from 'react';
import * as yup from 'yup';

import { Formik } from 'formik';
import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';
import useAuthStorage from '../hooks/useAuthStorage';

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
	const [signIn] = useSignIn();
	const authStorage = useAuthStorage();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const { data } = await signIn({ username, password });

			// setAccessToken(data.authenticate.accessToken);
		} catch (error) {
			console.log(error);
		}
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
