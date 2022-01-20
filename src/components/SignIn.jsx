import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
	formContainer: {
		display: 'flex',
		justifyContent: 'space-evenly',

		height: '40%',
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},

	input: {
		paddingHorizontal: 20,
		paddingVertical: 10,

		borderStyle: 'solid',
		borderWidth: 0.5,
		borderRadius: 5,
	},
	signIn: {
		color: '#fff',
		fontWeight: theme.fontWeights.bold,
		textAlign: 'center',
		padding: 10,
		backgroundColor: theme.colors.secondary,
		borderRadius: 5,
	},
});

const initialValues = {
	username: '',
	password: '',
};

const SignIn = () => {
	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			{() => (
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
						secureTextEntry={true}
					/>
					<TouchableWithoutFeedback onPress={onSubmit}>
						<Text style={styles.signIn}>Sign In</Text>
					</TouchableWithoutFeedback>
				</View>
			)}
		</Formik>
	);
};

export default SignIn;
