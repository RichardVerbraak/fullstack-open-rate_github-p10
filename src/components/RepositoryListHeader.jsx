import { View, StyleSheet } from 'react-native';
import React from 'react';
import Search from './Search';
import RepositorySortMenu from './RepositorySortMenu';

const styles = StyleSheet.create({
	headerContainer: {
		paddingVertical: 20,
		paddingHorizontal: 30,
	},

	button: {
		display: 'flex',
		justifyContent: 'space-around',
	},
});

const RepositoryListHeader = ({ refetch }) => {
	return (
		<View style={styles.headerContainer}>
			<Search />
			<RepositorySortMenu refetch={refetch} />
		</View>
	);
};

export default RepositoryListHeader;
