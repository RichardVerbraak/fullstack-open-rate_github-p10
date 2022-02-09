import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const styles = StyleSheet.create({
	formContainer: {
		display: 'flex',
		justifyContent: 'space-between',

		backgroundColor: '#fff',

		height: 300,
		width: '100%',

		marginLeft: 'auto',
		marginRight: 'auto',
		padding: 20,
	},

	input: {
		paddingHorizontal: 20,
		paddingVertical: 10,

		borderStyle: 'solid',
		borderWidth: 0.5,
		borderRadius: 5,
	},

	signIn: {
		backgroundColor: theme.colors.secondary,
		color: '#fff',
		fontWeight: theme.fontWeights.bold,
		textAlign: 'center',

		marginTop: 10,

		paddingVertical: 20,

		borderRadius: 5,
	},
});

// Separated the form to keep all the state context in the SignIn component and this only containing the styles and actual form layout
// onSubmit is actually the Formik handleSubmit which then calls onSubmit (which logs the values)
const SignInForm = ({ onSubmit }) => {
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
				secureTextEntry={true}
			/>
			<Pressable onPress={onSubmit}>
				<Text style={styles.signIn}>Sign In</Text>
			</Pressable>
		</View>
	);
};

export default SignInForm;
