// import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
	const { data, loading, error } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
	});

	return { data, loading, error };
};

export default useRepositories;
