import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

import * as Linking from 'expo-linking';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
	itemContainer: {
		display: 'flex',
		backgroundColor: '#fff',

		paddingTop: 15,
	},

	mainContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignContent: 'space-between',

		paddingLeft: 20,
	},

	imageContainer: {
		paddingRight: 15,
	},

	image: {
		width: 50,
		height: 50,
		borderRadius: 5,
	},

	textContainer: {
		display: 'flex',
		flex: 1,
	},

	description: {
		color: theme.colors.textSecondary,
		paddingTop: 5,
		paddingBottom: 5,
	},

	subContainer: {
		display: 'flex',
		flexDirection: 'row',
		width: 275,

		marginLeft: 'auto',
		marginRight: 'auto',

		justifyContent: 'space-between',

		// Could do this with space-around/evenly in the itemContainer as well?
		paddingTop: 20,
		paddingBottom: 15,
	},

	countContainer: {
		display: 'flex',
	},

	fullName: {
		color: '#000',
		fontWeight: '700',
	},

	language: {
		// Aligns the content to the left side of the container and having the text be as big as it content instead of spanning the entire containers width
		alignSelf: 'flex-start',

		backgroundColor: theme.colors.secondary,
		color: '#fff',
		borderRadius: 5,
		padding: 7,
	},

	button: {
		backgroundColor: theme.colors.secondary,
		color: '#fff',
		fontWeight: theme.fontWeights.bold,
		textAlign: 'center',

		paddingHorizontal: 20,
		paddingVertical: 10,

		borderRadius: 5,

		width: '90%',

		marginVertical: 10,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});

const RepositoryItem = ({ item, url }) => {
	const navigate = useNavigate();

	const {
		id,
		fullName,
		description,
		language,
		stargazersCount,
		forksCount,
		reviewCount,
		ratingAverage,
		ownerAvatarUrl,
	} = item;

	const navigateToRepo = (id) => {
		navigate(`/${id}`, { replace: true });
	};

	const openLink = (url) => {
		Linking.openURL(url);
	};

	return (
		<Pressable
			onPress={() => {
				navigateToRepo(id);
			}}
		>
			<View style={styles.itemContainer} testID='repositoryItem'>
				<View style={styles.mainContainer}>
					<View style={styles.imageContainer}>
						<Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
					</View>

					<View style={styles.textContainer}>
						<Text style={styles.fullName} testID='repositoryName'>
							{fullName}
						</Text>
						<Text
							color={'textSecondary'}
							style={styles.description}
							testID='repositoryDescription'
						>
							{description}
						</Text>
						<Text
							fontWeight={'bold'}
							style={styles.language}
							testID='repositoryLanguage'
						>
							{language}
						</Text>
					</View>
				</View>

				<View style={styles.subContainer}>
					<View style={styles.countContainer}>
						<Text fontWeight={'bold'} testID='repositoryStars'>
							{stargazersCount >= 1000
								? `${Math.round(stargazersCount / 100) / 10}k`
								: stargazersCount}
						</Text>
						<Text color={'textSecondary'}>Stars</Text>
					</View>

					<View style={styles.countContainer}>
						<Text fontWeight={'bold'} testID='repositoryForks'>
							{forksCount >= 1000
								? `${Math.round(forksCount / 100) / 10}k`
								: forksCount}
						</Text>
						<Text color={'textSecondary'}>Forks</Text>
					</View>

					<View style={styles.countContainer}>
						<Text fontWeight={'bold'} testID='repositoryReviews'>
							{reviewCount}
						</Text>
						<Text color={'textSecondary'}>Reviews</Text>
					</View>

					<View style={styles.countContainer}>
						<Text fontWeight={'bold'} testID='repositoryRating'>
							{ratingAverage}
						</Text>
						<Text color={'textSecondary'}>Rating</Text>
					</View>
				</View>

				{url && (
					<Pressable
						onPress={() => {
							openLink(url);
						}}
					>
						<Text style={styles.button}>Open in GitHub</Text>
					</Pressable>
				)}
			</View>
		</Pressable>
	);
};

export default RepositoryItem;
