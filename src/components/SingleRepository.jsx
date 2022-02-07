import { useQuery } from '@apollo/client';
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { GET_SINGLE_REPO } from '../graphql/queries';

import RepositoryItem from './RepositoryItem';
import RepositoryReview from './RepositoryReview';

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

// Renders a view in between every item in the flatlist
const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
	// Get ID from the url
	const { id } = useParams();

	// Fetch repo data based on url
	const { data, loading, error } = useQuery(GET_SINGLE_REPO, {
		variables: { repositoryId: id },
	});

	const item = data && data.repository;
	const url = data && data.repository.url;
	const reviews = data && data.repository.reviews.edges;

	return (
		<View>
			{!loading && (
				<FlatList
					data={reviews}
					renderItem={({ item: { node } }) => {
						return <RepositoryReview review={node} />;
					}}
					keyExtractor={({ node: { id } }) => id}
					ItemSeparatorComponent={ItemSeparator}
					ListHeaderComponent={() => <RepositoryItem item={item} url={url} />}
				/>
			)}
		</View>
	);
};

export default SingleRepository;
