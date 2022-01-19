import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate, Navigate } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e1e4e8',
		flexGrow: 1,
		flexShrink: 1,
	},
});

const Main = () => {
	return (
		<View style={styles.container}>
			<AppBar />

			<Routes>
				<Route path='/' element={<RepositoryList />} exact />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<RepositoryList />
		</View>
	);
};

export default Main;
