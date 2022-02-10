import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import FormikTextInput from '../../FormikTextInput';
import { formStyles } from '../../../theme';

const styles = StyleSheet.create({
	formContainer: {
		...formStyles.formContainer,

		height: 300,
		padding: 20,
	},

	input: {
		...formStyles.input,
	},

	signIn: {
		...formStyles.button,
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
