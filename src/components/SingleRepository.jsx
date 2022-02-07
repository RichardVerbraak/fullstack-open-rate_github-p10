import { useQuery } from '@apollo/client';
import React from 'react';
import { View, Flatlist } from 'react-native';
import { useParams } from 'react-router-native';
import { GET_SINGLE_REPO } from '../graphql/queries';

import RepositoryItem from './RepositoryItem';
import RepositoryReviews from './RepositoryReviews';

const SingleRepository = () => {
	// Get ID from the url
	const { id } = useParams();

	// Fetch repo data based on url
	const { data, loading, error } = useQuery(GET_SINGLE_REPO, {
		variables: { repositoryId: id },
	});

	const item = data && data.repository;
	const url = data && data.repository.url;

	return (
		<View>
			{!loading && (
				<Flatlist
					ListHeaderComponent={() => <RepositoryItem item={item} url={url} />}
				/>
			)}
		</View>
	);
};

// <RepositoryItem item={item} url={url} />
// 					<RepositoryReviews />

export default SingleRepository;
