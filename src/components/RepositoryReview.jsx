import React from 'react';
import { StyleSheet, View, Pressable, Alert } from 'react-native';
import { theme } from '../theme';
import Text from './Text';

import { format, parseISO } from 'date-fns';

const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: '#fff',

		paddingHorizontal: 20,
		paddingVertical: 20,
	},

	contentContainer: {
		display: 'flex',
		flexDirection: 'row',
	},

	ratingContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		width: 50,
		height: 50,

		borderColor: theme.colors.secondary,
		borderWidth: 2,
		borderRadius: 50,
	},

	rating: {
		color: theme.colors.secondary,
	},

	textContainer: {
		paddingHorizontal: 20,
	},

	textHeading: {
		paddingBottom: 5,
	},

	buttonContainer: {
		display: 'flex',
		flexDirection: 'row',

		paddingHorizontal: 20,
		marginTop: 15,
	},

	viewButton: {
		backgroundColor: '#4747ed',
		borderRadius: 5,
		padding: 15,

		marginRight: 5,

		flex: 1,
	},

	deleteButton: {
		backgroundColor: '#e14d4d',
		borderRadius: 5,
		padding: 15,
		flex: 1,

		marginLeft: 5,
	},

	buttonText: {
		textAlign: 'center',
		color: '#fff',
	},
});

// Component being reused in both a public (SingleRepository) and private (RepositoryReview) component
// Hence the user being passed in to conditionally render

const RepositoryReview = ({ review, user, navigate, deleteReview }) => {
	return (
		<View style={styles.itemContainer}>
			<View style={styles.contentContainer}>
				<View style={styles.ratingContainer}>
					<Text fontWeight={'bold'} style={styles.rating}>
						{review.rating}
					</Text>
				</View>

				<View style={styles.textContainer}>
					<View style={styles.textHeading}>
						{user ? (
							<Text fontWeight={'bold'}>{review.repositoryId}</Text>
						) : (
							<Text fontWeight={'bold'}>{review.user.username}</Text>
						)}

						<Text color={'textSecondary'}>
							{format(parseISO(review.createdAt), 'dd.MM.yyy')}
						</Text>
					</View>
					<Text>{review.text}</Text>
				</View>
			</View>

			{user && (
				<View style={styles.buttonContainer}>
					<Pressable
						onPress={() => {
							navigate(review.repositoryId);
						}}
						style={styles.viewButton}
					>
						<Text fontWeight={'bold'} style={styles.buttonText}>
							View Repository
						</Text>
					</Pressable>

					<Pressable
						onPress={() => {
							Alert.alert(
								'Delete review',
								'Are you sure you want to delete this review?',
								[
									{
										text: 'Cancel',
										onPress: () => {
											console.log('cancelled');
										},
										style: 'cancel',
									},
									{
										text: 'Delete',
										onPress: () => {
											deleteReview(review.id);
										},
									},
								]
							);
						}}
						style={styles.deleteButton}
					>
						<Text fontWeight={'bold'} style={styles.buttonText}>
							Delete Review
						</Text>
					</Pressable>
				</View>
			)}
		</View>
	);
};

export default RepositoryReview;
