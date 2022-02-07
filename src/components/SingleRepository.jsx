import { useQuery } from '@apollo/client';
import React from 'react';
import { View, FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import { GET_SINGLE_REPO } from '../graphql/queries';

import RepositoryItem from './RepositoryItem';
import RepositoryReview from './RepositoryReview';

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

	console.log(reviews);

	return (
		<View>
			{!loading && (
				<FlatList
					data={reviews}
					renderItem={({ item: { node }, index }) => {
						return <RepositoryReview review={node} />;
					}}
					ListHeaderComponent={() => <RepositoryItem item={item} url={url} />}
				/>
			)}
		</View>
	);
};

export default SingleRepository;
