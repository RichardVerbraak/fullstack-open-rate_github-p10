import React from 'react';
import { StyleSheet, View } from 'react-native';
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
});

const RepositoryReview = ({ review }) => {
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
						<Text fontWeight={'bold'}>{review.user.username}</Text>
						<Text color={'textSecondary'}>
							{format(parseISO(review.createdAt), 'dd.MM.yyy')}
						</Text>
					</View>
					<Text>{review.text}</Text>
				</View>
			</View>
		</View>
	);
};

export default RepositoryReview;
