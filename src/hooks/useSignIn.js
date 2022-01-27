import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
	const [mutate, result] = useMutation(SIGN_IN);

	const signIn = async ({ username, password }) => {
		const data = await mutate({
			variables: { credentials: { username, password } },
		});
		return data;
	};

	return [signIn, result];
};

export default useSignIn;
