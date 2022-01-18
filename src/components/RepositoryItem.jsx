import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../theme';

import Text from './Text';

const styles = StyleSheet.create({
	itemContainer: {
		display: 'flex',
		justifyContent: 'space-around',
		backgroundColor: '#fff',
		height: 175,
	},

	mainContainer: {
		display: 'flex',
		flexDirection: 'row',

		paddingLeft: 20,
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

	description: {
		color: theme.colors.textSecondary,
	},

	subContainer: {
		display: 'flex',
		flexDirection: 'row',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: 275,
		justifyContent: 'space-between',
	},

	countContainer: {
		display: 'flex',
	},

	fullName: {
		color: '#000',
		fontWeight: '700',
	},

	language: {
		backgroundColor: theme.colors.secondary,
		color: '#fff',
		borderRadius: 5,
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
					<Text color={'textSecondary'}>{description}</Text>
					<Text fontWeight={'bold'} style={styles.language}>
						{language}
					</Text>
				</View>
			</View>

			<View style={styles.subContainer}>
				<View style={styles.countContainer}>
					<Text fontWeight={'bold'}>{stargazersCount}</Text>
					<Text color={'textSecondary'}>Stars</Text>
				</View>

				<View style={styles.countContainer}>
					<Text fontWeight={'bold'}>{forksCount}</Text>
					<Text color={'textSecondary'}>Forks</Text>
				</View>

				<View style={styles.countContainer}>
					<Text fontWeight={'bold'}>{reviewCount}</Text>
					<Text color={'textSecondary'}>Reviews</Text>
				</View>

				<View style={styles.countContainer}>
					<Text fontWeight={'bold'}>{ratingAverage}</Text>
					<Text color={'textSecondary'}>Rating</Text>
				</View>
			</View>
		</View>
	);
};

export default RepositoryItem;
