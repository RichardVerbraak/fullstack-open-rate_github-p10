import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: '#fff',
		height: 175,
	},

	mainContainer: {
		display: 'flex',
		flexDirection: 'row',

		paddingTop: 10,
		paddingLeft: 10,
	},

	imageContainer: {
		paddingRight: 15,
	},

	image: {
		borderRadius: 5,
		width: 50,
		height: 50,
	},

	textContainer: {
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
			<View style={styles.mainContainer}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.fullName}>{fullName}</Text>
					<Text>{description}</Text>
					<Text>{language}</Text>
				</View>
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
