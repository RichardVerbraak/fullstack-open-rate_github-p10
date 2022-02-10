import { Pressable, Text, View, StyleSheet } from 'react-native';
import React from 'react';

import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';

import { theme, formStyles } from '../theme';

const styles = StyleSheet.create({
	formContainer: {
		...formStyles.formContainer,
		height: 300,
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

const SignUpForm = () => {
	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<View>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
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
								style={styles.input}
							/>
							<FormikTextInput
								name='passwordConfirmation'
								placeholder='Password confirmation'
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
