import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
	// No need to wrap the query in a useEffect hook, useQuery is already an "effect" meaning it will run on render or state/prop change
	// When useQuery renders and why -- https://stackoverflow.com/questions/56964838/trying-call-usequery-in-function-with-react-apollo-hooks
	// On useEffect usage -- https://github.com/trojanowski/react-apollo-hooks/issues/158
	const { data, loading, error } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: 'cache-and-network',
	});

	return { data, loading, error };
};

export default useRepositories;
