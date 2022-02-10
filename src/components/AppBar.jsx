import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { theme } from '../theme.js';
import AppBarTab from './AppBarTab.jsx';
import { ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries.js';
import SignOut from './SignOut.jsx';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.primary,

		opacity: 0.95,
	},

	contentContainer: {
		display: 'flex',
		flexDirection: 'row',

		paddingVertical: 17.5,
		paddingHorizontal: 7.5,
	},
	text: {
		fontWeight: 'bold',
		fontSize: theme.fontSizes.subheading,
		color: '#fff',

		padding: 12.5,
	},
});

const AppBar = () => {
	const { data } = useQuery(GET_USER);

	return (
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.contentContainer}
				horizontal={true}
			>
				<AppBarTab title='Repositories' url='/' text={styles.text} />

				{data && data.me ? (
					<>
						<AppBarTab
							title='Create a review'
							url='/review'
							text={styles.text}
						/>
						<SignOut text={styles.text} />
					</>
				) : (
					<>
						<AppBarTab title='Sign Up' url='/signup' text={styles.text} />
						<AppBarTab title={'Sign In'} url={'/login'} text={styles.text} />
					</>
				)}
			</ScrollView>
		</View>
	);
};

export default AppBar;
