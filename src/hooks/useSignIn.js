import { useApolloClient, useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';

import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
	const [mutate, result] = useMutation(SIGN_IN);
	const apolloClient = useApolloClient();
	const authStorage = useAuthStorage();

	const signIn = async ({ username, password }) => {
		const { data } = await mutate({
			variables: { credentials: { username, password } },
		});

		// Stores it in AsyncStorage
		await authStorage.setAccessToken(data.authenticate.accessToken);

		// dispatch({ type: 'SIGN_IN', payload: data.authenticate.accessToken });

		// Clears Apollo Clients cache and re-executes any active queries
		apolloClient.resetStore();

		// Return the data to SignIn component to console.log
		return data;
	};

	return [signIn, result];
};

export default useSignIn;
