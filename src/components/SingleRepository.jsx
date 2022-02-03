import React from 'react';
import { View } from 'react-native';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';

const SingleRepository = () => {
	// Get ID from the url
	const { id } = useParams();

	// Fetch repo data based on url
	// const { data } = useQuery(GET_SINGLE_REPO, id)

	return (
		<View>
			<RepositoryItem item={data} />
		</View>
	);
};

export default SingleRepository;
