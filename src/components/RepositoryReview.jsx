import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: '#fff',

		paddingTop: 15,
	},

	contentContainer: {
		display: 'flex',
		flexDirection: 'row',
		padding: 10,
	},

	ratingContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		width: 50,
		height: 50,

		borderColor: 'blue',
		borderWidth: 2,
		borderRadius: 50,
	},

	rating: {
		color: 'blue',
	},

	textContainer: {
		paddingHorizontal: 20,
	},
});

const RepositoryReview = ({ review }) => {
	return (
		<View style={styles.itemContainer}>
			<View style={styles.contentContainer}>
				<View style={styles.ratingContainer}>
					<Text style={styles.rating}>{review.rating}</Text>
				</View>
				<View style={styles.textContainer}>
					<Text>{review.user.username}</Text>
					<Text>{review.createdAt}</Text>
					<Text>{review.text}</Text>
				</View>
			</View>
		</View>
	);
};

export default RepositoryReview;
