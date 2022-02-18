import { StyleSheet, View, Pressable, Text } from 'react-native';
import React from 'react';

import { Formik } from 'formik';
import FormikTextInput from '../../FormikTextInput';
import { object, string, number } from 'yup';

import { formStyles } from '../../../theme';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../../../graphql/mutations';
import { GET_USER } from '../../../graphql/queries';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
	formContainer: {
		...formStyles.formContainer,
	},

	input: {
		...formStyles.input,
	},

	createButton: {
		...formStyles.button,
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
	const [createReview] = useMutation(CREATE_REVIEW, {
		refetchQueries: [{ query: GET_USER }],
	});

	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { data } = await createReview({
			variables: {
				review: {
					ownerName: values.username,
					repositoryName: values.name,
					rating: parseInt(values.rating),
					text: values.review,
				},
			},
		});

		navigate(`/${data.createReview.repositoryId}`);
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
								multiline={true}
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
