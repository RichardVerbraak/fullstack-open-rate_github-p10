// import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
	// No need to wrap the query in a useEffect hook, useQuery is already an "effect"
	// https://github.com/trojanowski/react-apollo-hooks/issues/158
	const { data, loading, error } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
	});

	return { data, loading, error };
};

export default useRepositories;
