import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme.js';
import AppBarTab from './AppBarTab.jsx';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',

		paddingBottom: 15,

		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.primary,
		opacity: 0.95,
	},
	text: {
		fontWeight: 'bold',
		color: '#fff',
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<AppBarTab title={'Repositories'} url={'/'} text={styles.text} />
			<AppBarTab title={'Sign In'} url={'/login'} text={styles.text} />
		</View>
	);
};

export default AppBar;
