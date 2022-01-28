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

		await authStorage.setAccessToken(data.authenticate.accessToken);
		apolloClient.resetStore();

		return data;
	};

	return [signIn, result];
};

export default useSignIn;
