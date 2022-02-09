import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import SignIn from './SignIn';
import ReviewForm from './ReviewForm';

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
				<Route path='/:id' element={<SingleRepository />} />
				<Route path='/login' element={<SignIn />} />
				<Route path='/review' element={<ReviewForm />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</View>
	);
};

export default Main;
