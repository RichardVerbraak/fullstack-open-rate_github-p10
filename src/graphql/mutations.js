import { gql } from '@apollo/client';

const SIGN_IN = gql`
	mutation SignIn($credentials: AuthenticateInput) {
		authenticate(credentials: $credentials) {
			accessToken
		}
	}
`;

export { SIGN_IN };
