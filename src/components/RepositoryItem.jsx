import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../theme';

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
		margin: 'auto',
		maxWidth: '80%',
		alignContent: 'center',
		justifyContent: 'space-between',
	},

	fullName: {
		color: '#000',
		fontWeight: '700',
	},

	language: {
		backgroundColor: theme.colors.secondary,
		color: '#fff',
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
					<Text style={styles.language}>{language}</Text>
				</View>
			</View>

			<View style={styles.subContainer}>
				<View>
					<Text fontWeight={'bold'}>{stargazersCount}</Text>
					<Text color={'textSecondary'}>Stars</Text>
				</View>

				<View>
					<Text fontWeight={'bold'}>{forksCount}</Text>
					<Text color={'textSecondary'}>Forks</Text>
				</View>

				<View>
					<Text fontWeight={'bold'}>{reviewCount}</Text>
					<Text color={'textSecondary'}>Reviews</Text>
				</View>

				<View>
					<Text fontWeight={'bold'}>{ratingAverage}</Text>
					<Text color={'textSecondary'}>Rating</Text>
				</View>
			</View>
		</View>
	);
};

export default RepositoryItem;
