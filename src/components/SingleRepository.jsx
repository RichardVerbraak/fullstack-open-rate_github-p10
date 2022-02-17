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

	// Article on fetch policies: https://medium.com/@galen.corey/understanding-apollo-fetch-policies-705b5ad71980
	// Explanation for cache and network
	// 1. You query for data -> Apollo checks cache
	// 2. If data is in cache return the data
	// 3. Regardless if the data was found, still query the gql server
	// 4. Update the cache with new data from the server
	// 5. Return the updated server data

	// Fetch repo data based on url
	const { data, loading, fetchMore } = useQuery(GET_SINGLE_REPO, {
		variables: { repositoryId: id, first: 10 },
		fetchPolicy: 'cache-and-network',
	});

	const item = data && data.repository;
	const url = data && data.repository.url;
	const reviews = data && data.repository.reviews.edges;

	const handleFetchMore = () => {
		const canFetchMore =
			!loading && data && data.repository.reviews.pageInfo.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				after: data.repository.reviews.pageInfo.endCursor,
			},
		});
	};

	// Flex: 1 on the parent of the FlatList will fix the not scrolling to the bottom thing
	return (
		<View style={{ flex: 1 }}>
			{!loading && (
				<FlatList
					data={reviews}
					renderItem={({ item: { node } }) => {
						// Destructure the node object from the edges array (edges is an array of objects, each node being the review)
						return <RepositoryReview review={node} />;
					}}
					keyExtractor={({ node: { id } }) => id}
					ItemSeparatorComponent={ItemSeparator}
					ListHeaderComponent={() => <RepositoryItem item={item} url={url} />}
					onEndReached={handleFetchMore}
					onEndReachedThreshold={0.5}
				/>
			)}
		</View>
	);
};

export default SingleRepository;
