import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: '#fff',
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 5,
	},

	mainContainer: {
		display: 'flex',
	},

	subContainer: {
		display: 'flex',
		flexDirection: 'row',
	},

	fullName: {
		color: '#000',
		fontWeight: '700',
	},
});

const RepositoryItem = ({ item }) => {
	const {
		fullName,
		description,
		language,
		stargazersCount,
		forksCount,
		reviewCount,
		ratingAverage,
		ownerAvatarUrl,
	} = item;

	return (
		<View style={styles.itemContainer}>
			<Image style={styles.image} source={{ uri: ownerAvatarUrl }} />

			<View style={styles.mainContainer}>
				<Text style={styles.fullName}>Full name: {fullName}</Text>
				<Text>Description: {description}</Text>
				<Text>Language: {language}</Text>
			</View>

			<View style={styles.subContainer}>
				<Text>Stars: {stargazersCount}</Text>
				<Text>Forks: {forksCount}</Text>
				<Text>Reviews: {reviewCount}</Text>
				<Text>Rating: {ratingAverage}</Text>
			</View>
		</View>
	);
};

export default RepositoryItem;
