import { Pressable, Text, View, StyleSheet } from 'react-native';
import React from 'react';

import { Formik } from 'formik';
import FormikTextInput from '../../FormikTextInput';
import { object, string, ref } from 'yup';

import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../../../graphql/mutations';
import useSignIn from '../../../hooks/useSignIn';

import { useNavigate } from 'react-router-native';

import { formStyles } from '../../../theme';

const styles = StyleSheet.create({
	formContainer: {
		...formStyles.formContainer,
		height: 400,
		backgroundColor: '#fff',
	},

	input: {
		...formStyles.input,
	},

	signUpButton: {
		...formStyles.button,
	},
});

const initialValues = {
	username: '',
	password: '',
	passwordConfirmation: '',
};

const validationSchema = object({
	username: string()
		.min(1, 'Username must have a minimum of 1 character')
		.max(30, 'Username cannot exceed 30 characters')
		.required('Username is required'),
	password: string()
		.min(5, 'Password must have a minimum of 5 characters')
		.max(50, 'Password cannot exceed 50 characters')
		.required('Password is required'),
	passwordConfirmation: string()
		.oneOf([ref('password'), null], 'Passwords must match')
		.required('Password confirm is required'),
});

const SignUpForm = () => {
	const [signUp] = useMutation(SIGN_UP);
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async ({ username, password }) => {
		try {
			await signUp({
				variables: {
					user: { username, password },
				},
			});

			await signIn({ username, password });
			navigate('/');
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<View>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ handleSubmit }) => {
					return (
						<View style={styles.formContainer}>
							<FormikTextInput
								name='username'
								placeholder='Username'
								style={styles.input}
							/>
							<FormikTextInput
								name='password'
								placeholder='Password'
								secureTextEntry={true}
								style={styles.input}
							/>
							<FormikTextInput
								name='passwordConfirmation'
								placeholder='Password confirmation'
								secureTextEntry={true}
								style={styles.input}
							/>
							<Pressable onPress={handleSubmit}>
								<Text style={styles.signUpButton}>Sign Up</Text>
							</Pressable>
						</View>
					);
				}}
			</Formik>
		</View>
	);
};

export default SignUpForm;
