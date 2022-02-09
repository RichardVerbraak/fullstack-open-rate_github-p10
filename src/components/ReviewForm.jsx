import { StyleSheet, View, Pressable, Text } from 'react-native';
import React from 'react';

import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import { object, string, number } from 'yup';

import theme from '../theme';

const styles = StyleSheet.create({
	formContainer: {
		display: 'flex',
		justifyContent: 'space-around',

		backgroundColor: '#fff',

		height: 500,
		width: '100%',

		marginLeft: 'auto',
		marginRight: 'auto',
		padding: 30,
	},

	input: {
		paddingHorizontal: 20,
		paddingVertical: 10,

		borderColor: theme.colors.textSecondary,
		borderStyle: 'solid',
		borderWidth: 0.5,
		borderRadius: 5,
	},

	createButton: {
		backgroundColor: theme.colors.secondary,
		color: '#fff',
		fontWeight: theme.fontWeights.bold,
		textAlign: 'center',

		marginTop: 10,

		paddingVertical: 20,

		borderRadius: 5,
	},
});

const initialValues = {
	username: '',
	name: '',
	rating: '',
	review: '',
};

const validationSchema = object({
	username: string().required('Username is required'),
	name: string().required('Name is required'),
	rating: number()
		.typeError('Rating must be a number')
		.required('Number is required')
		.moreThan(0, 'Enter a rating higher than 0')
		.max(100, 'Enter a rating lower than 100'),
	review: string().optional(),
});

const ReviewForm = () => {
	return (
		<View>
			<Formik initialValues={initialValues} validationSchema={validationSchema}>
				{({ handleSubmit }) => {
					return (
						<View onSubmit={handleSubmit} style={styles.formContainer}>
							<FormikTextInput
								name='username'
								placeholder='Repository Owner Name'
								style={styles.input}
							/>
							<FormikTextInput
								name='name'
								placeholder='Repository Name'
								style={styles.input}
							/>
							<FormikTextInput
								name='rating'
								placeholder='Rating between 0 and 100'
								style={styles.input}
							/>
							<FormikTextInput
								name='review'
								placeholder='Review'
								style={styles.input}
							/>
							<Pressable onPress={handleSubmit}>
								<Text style={styles.createButton}>Create a Review</Text>
							</Pressable>
						</View>
					);
				}}
			</Formik>
		</View>
	);
};

export default ReviewForm;
