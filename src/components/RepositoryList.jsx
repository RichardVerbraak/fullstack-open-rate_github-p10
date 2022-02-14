import React, { useEffect } from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

// Can also be done with .map but FlatList has "built-in" lazy loading
// Good rule of thumb is to use FlatList when the list of items are larger than the screen (better for performance)
// tips for FlatList performance https://github.com/filipemerker/flatlist-performance-tips

const RepositoryList = () => {
	const [getRepositories, { data, loading }] = useRepositories();

	useEffect(() => {
		getRepositories({
			variables: { orderBy: 'CREATED_AT', orderDirection: 'ASC' },
		});
	}, []);

	return <RepositoryListContainer data={data} loading={loading} />;
};

export default RepositoryList;
