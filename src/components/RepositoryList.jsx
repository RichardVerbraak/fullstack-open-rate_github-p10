import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

// Renders a view in between every item in the flatlist
const ItemSeparator = () => <View style={styles.separator} />;

// Can also be done with .map but FlatList has "built-in" lazy loading
// Good rule of thumb is to use FlatList when the list of items are larger than the screen (better for performance)
// tips for FlatList performance https://github.com/filipemerker/flatlist-performance-tips

const RepositoryList = () => {
	const [repositories, setRepositories] = useState();

	const fetchRepositories = async () => {
		const response = await fetch(
			'http:///192.168.178.16:5000/api/repositories'
		);
		const json = await response.json();

		console.log(json);

		setRepositories(json);
	};

	useEffect(() => {
		fetchRepositories();
	}, []);

	// Get the nodes from the edges array
	// Node being data from a single repository
	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => {
				return <RepositoryItem item={item} />;
			}}
		/>
	);
};

export default RepositoryList;
