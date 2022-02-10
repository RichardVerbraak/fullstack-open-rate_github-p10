import { Pressable, Text, View } from 'react-native';
import React from 'react';

import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';

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
					<View>
						<FormikTextInput name='username' placeholder='Username' />
						<FormikTextInput name='password' placeholder='Password' />
						<FormikTextInput
							name='passwordConfirmation'
							placeholder='Password confirmation'
						/>
						<Pressable onPress={handleSubmit}>
							<Text>Sign Up</Text>
						</Pressable>
					</View>;
				}}
			</Formik>
		</View>
	);
};

export default SignUpForm;
