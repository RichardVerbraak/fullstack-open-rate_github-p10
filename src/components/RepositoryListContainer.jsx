import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import RepositorySortMenu from './RepositorySortMenu';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

// Renders a view in between every item in the flatlist
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, loading }) => {
	const repositoryNodes = !loading
		? repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			ListHeaderComponent={<RepositorySortMenu />}
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => {
				return <RepositoryItem item={item} />;
			}}
		/>
	);
};

export default RepositoryListContainer;
