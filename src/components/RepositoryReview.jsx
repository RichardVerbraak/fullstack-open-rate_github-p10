import React from 'react';
import { Text, View } from 'react-native';

const RepositoryReview = ({ review, index }) => {
	console.log(review);

	return (
		<View>
			<Text>{review.text}</Text>
		</View>
	);
};

export default RepositoryReview;
