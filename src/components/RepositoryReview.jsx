import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	itemContainer: {
		display: 'flex',
		backgroundColor: '#fff',

		paddingTop: 15,
	},
});

const RepositoryReview = ({ review, index }) => {
	console.log(review);

	return (
		<View style={styles.itemContainer}>
			<View>
				<Text>{review.rating}</Text>
			</View>
			<View>
				<Text>{review.user.username}</Text>
				<Text>{review.createdAt}</Text>
				<Text>{review.text}</Text>
			</View>
		</View>
	);
};

export default RepositoryReview;
