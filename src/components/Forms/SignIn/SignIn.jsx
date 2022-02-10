import React from 'react';

import useSignIn from '../../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import SignInContainer from './SignInContainer';

// handleSubmit is a prop that comes from Formik which calls onSubmit after it's done
const SignIn = () => {
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			await signIn({ username, password });
			navigate('/', { replace: true });
		} catch (error) {
			console.log(error);
		}
	};

	return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
