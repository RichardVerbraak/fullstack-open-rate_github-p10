import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
	// No need to wrap the query in a useEffect hook, useQuery is already an "effect" meaning it will run on render or state/prop change
	// When useQuery renders and why -- https://stackoverflow.com/questions/56964838/trying-call-usequery-in-function-with-react-apollo-hooks
	// On useEffect usage -- https://github.com/trojanowski/react-apollo-hooks/issues/158

	// First time the useQuery runs is with the default variables
	// The refetch function thats passed down to the menu will fetch with other variables
	const { data, loading, refetch, fetchMore } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
		variables: {
			orderBy: 'CREATED_AT',
			orderDirection: 'ASC',
			first: 8,
		},
	});

	const handleFetchMore = () => {
		// Check if there are more pages if loading is false (a check to see if fetching is already in progress)
		const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

		// Don't run if there aren't anymore pages
		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				after: data.repositories.pageInfo.endCursor,
			},
		});
	};

	return {
		repositories: data?.repositories,
		loading,
		refetch,
		fetchMore: handleFetchMore,
	};
};

export default useRepositories;
