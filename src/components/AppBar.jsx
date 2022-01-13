import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#24292e',
		opacity: 0.95,
	},
	text: {
		fontWeight: 'bold',
		color: '#fff',
		paddingTop: 20,
		paddingLeft: 10,
		paddingBottom: 15,
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Repositories</Text>
		</View>
	);
};

export default AppBar;
