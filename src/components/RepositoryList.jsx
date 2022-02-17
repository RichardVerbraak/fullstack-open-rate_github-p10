import React from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

// Can also be done with .map but FlatList has "built-in" lazy loading
// Good rule of thumb is to use FlatList when the list of items are larger than the screen (better for performance)
// tips for FlatList performance https://github.com/filipemerker/flatlist-performance-tips

const RepositoryList = () => {
	const { repositories, loading, refetch, fetchMore } = useRepositories();

	const onEndReach = () => {
		fetchMore();
	};

	return (
		<RepositoryListContainer
			repositories={repositories}
			loading={loading}
			refetch={refetch}
			onEndReach={onEndReach}
		/>
	);
};

export default RepositoryList;
