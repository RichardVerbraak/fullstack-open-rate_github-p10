import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';
import RepositorySortMenu from './RepositorySortMenu';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

// Renders a view in between every item in the flatlist
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ data, loading, refetch }) => {
	const repositoryNodes =
		!loading && data ? data.repositories.edges.map((edge) => edge.node) : [];

	return (
		<FlatList
			ListHeaderComponent={<RepositoryListHeader refetch={refetch} />}
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => {
				return <RepositoryItem item={item} />;
			}}
		/>
	);
};

export default RepositoryListContainer;
